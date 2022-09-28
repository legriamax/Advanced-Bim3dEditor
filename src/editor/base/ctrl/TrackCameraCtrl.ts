
import { TCState } from "@/libs/const/enum";
import { MOUSE, OrthographicCamera, PerspectiveCamera, Quaternion, Vector2, Vector3 } from "three";


/**
 * @description 视角翻转控制器
 * 其实只需要改变相机的位置和朝向就能看到世界的各个方面属性，
 * 位置和朝向的改变通常需要用到四元素、球面坐标、向量计算等,
 * @author songmy
 * @since 2022/2/25
 */
export default class TrackCameraCtrl implements IDispose {

    public camera: any;
    public domElement: any
    public enabled: boolean;
    public screen: any;
    public rotateSpeed: number;
    public zoomSpeed: number;
    public panSpeed: number;
    public noRotate: boolean;
    public noZoom: boolean;
    public noPan: boolean;
    public staticMoving: boolean;
    public dynamicDampingFactor: number;
    public minDistance: number;
    public maxDistance: number;
    public keys: any
    public mouseButtons: any;
    public target: Vector3;
    public target0: Vector3;
    public position0: Vector3;
    public up0: Vector3;
    public zoom0: number;
    public lastZoom: number;
    public EPS: Number;
    public lastPosition: Vector3;
    private _eye: Vector3;
    private _movePrev: Vector2;
    private _moveCurr: Vector2;
    private _lastAxis: Vector3;
    private _zoomStart: Vector2
    private _zoomEnd: Vector2
    private _panStart: Vector2
    private _panEnd: Vector2
    private _pointers: any[]
    private _pointerPositions: any;
    private _state: number;
    private _touchZoomDistanceStart: number;
    private _touchZoomDistanceEnd: number;
    private _lastAngle: number;
    private context_menu: any;
    private pointer_down: any;
    private pointer_move: any;
    private pointer_up: any;
    private pointer_cancel: any;
    private mouse_wheel: any;
    private _rendDom: any;
    private _meshCenter: Vector3;

    constructor(camera: any, domElement: any, renderDom: any) {

        if (domElement === undefined) {
            console.warn('TrackCameraCtrl: domElement is undefined.');
        }
        if (domElement === document) {
            console.error('TrackCameraCtrl: Please use "renderer.domElement" instead.');
        }
        this._rendDom = renderDom;

        this.camera = camera;
        this.domElement = domElement;
        // 禁用触摸滚动
        this.domElement.style.touchAction = 'none';

        this.enabled = true;

        // 设置屏幕的位置和偏移
        this.screen = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        // 移动鼠标时场景旋转的速度
        this.rotateSpeed = 3;
        // 鼠标滚轮放大缩小的速度
        this.zoomSpeed = 3;
        // 上下左右移动的速度
        this.panSpeed = 2.5;
        // 控制旋转、缩放、平移
        this.noRotate = false;
        this.noZoom = false;
        this.noPan = false;
        this.staticMoving = true;
        // 阻尼系数；旋转时候的阻力
        this.dynamicDampingFactor = 20;
        // 表示相机距离物体的最小距离和最大距离
        this.minDistance = 500;
        this.maxDistance = 500000;

        this.mouseButtons = {
            LEFT: MOUSE.ROTATE,
            MIDDLE: MOUSE.DOLLY,
            RIGHT: MOUSE.PAN
        };
        // internals 这些私有变量用来追踪相机状态
        this.target = new Vector3(0, 1500, 0);
        this.EPS = 0.000001;
        // 相机上次的位置
        this.lastPosition = new Vector3();
        this.lastZoom = 1;
        this._lastAngle = 0;

        this._state = TCState.NONE;

        this._touchZoomDistanceStart = 0;
        this._touchZoomDistanceEnd = 0;


        this._eye = new Vector3();

        this._movePrev = new Vector2();
        this._moveCurr = new Vector2();

        this._lastAxis = new Vector3();

        this._zoomStart = new Vector2();
        this._zoomEnd = new Vector2();

        this._panStart = new Vector2();
        this._panEnd = new Vector2();

        this._pointers = [];
        this._pointerPositions = {};

        // 保存相机的最初始状态
        this.target0 = this.target.clone();
        // 相机的当前位置
        this.position0 = this.camera.position.clone();
        // 相机的上方向
        this.up0 = this.camera.up.clone();
        this.zoom0 = this.camera.zoom;

        this.addEve();
        this.handleResize();

        // 开始时，强制更新
        this.update();
    }

    clearData(): void {
        this._rendDom = null;
        this.camera = null;
        this.domElement = null;
        this.screen = null;
        this.mouseButtons = null;
        this.target = null;
        this.lastPosition = null;
        this._eye = null;
        this._movePrev = null;
        this._moveCurr = null;
        this._lastAxis = null;
        this._zoomStart = null;
        this._zoomEnd = null;
        this._panStart = null;
        this._panEnd = null;
        this._pointers = null;
        this._pointerPositions = null;
        this.target0 = null;
        this.position0 = null;
        this.up0 = null;
        this.context_menu = null;
        this.pointer_down = null;
        this.pointer_move = null;
        this.pointer_up = null;
        this.pointer_cancel = null;
        this.mouse_wheel = null;
    }

    dispose(): void {
        this.removeEve();
        this.clearData();
    };

    private addEve(): void {
        console.log("track add eve")
        this.context_menu = (event: any) => {
            this.contextmenu(event);
        }
        this.pointer_down = (event: any) => {
            this.onPointerDown(event);
        }
        this.pointer_move = (event: any) => {
            this.onPointerMove(event);
        }
        this.pointer_up = (event: any) => {
            this.onPointerUp(event);
        }
        this.pointer_cancel = (event: any) => {
            this.onPointerCancel(event);
        }
        this.mouse_wheel = (event: any) => {
            this.onMouseWheel(event);
        }

        this.domElement.addEventListener('contextmenu', this.context_menu);
        this.domElement.addEventListener('pointerdown', this.pointer_down);
        this.domElement.addEventListener('pointercancel', this.pointer_cancel);
        this.domElement.addEventListener('wheel', this.mouse_wheel, {
            passive: false
        });
        // BIM.ED.on(Event.KEY_DOWN, this, this.keydown);
        // BIM.ED.on(Event.KEY_UP, this, this.keyup);

        // BIM.ED.on(EventDef.MESH_CENTER_CHANGE, this, this.onMeshCenterChange);
    }

    private removeEve(): void {
        this.domElement.removeEventListener('contextmenu', this.context_menu);
        this.domElement.removeEventListener('pointerdown', this.pointer_down);
        this.domElement.removeEventListener('pointercancel', this.pointer_cancel);
        this.domElement.removeEventListener('wheel', this.mouse_wheel);
        this.domElement.removeEventListener('pointermove', this.pointer_move);
        this.domElement.removeEventListener('pointerup', this.pointer_up);
        // BIM.ED.off(Event.KEY_DOWN, this, this.keydown);
        // BIM.ED.off(Event.KEY_UP, this, this.keyup);
        // BIM.ED.off(EventDef.MESH_CENTER_CHANGE, this, this.onMeshCenterChange);
    }

    // private onMeshCenterChange(center: Vector3): void {
    //     this._meshCenter = center;
    //     BIM.ED.event(EventDef.CAMERA_TARGET_CHANGE, center);
    // }

    private handleResize(): void {
        this.screen.left = 0;
        this.screen.top = 0;
        this.screen.width = window.innerWidth;
        this.screen.height = window.innerHeight;
    }

    private getMouseOnScreen(pageX: number, pageY: number): Vector2 {
        let vector = new Vector2();
        //  将鼠标坐标转换成0-1，左上角为0，0右下角为1，1
        let x = (pageX - this.screen.left) / this.screen.width;
        let y = (pageY - this.screen.top) / this.screen.height;
        vector.set(x, y);
        return vector;
    }

    private getMouseOnCircle(pageX: number, pageY: number): Vector2 {
        let vector = new Vector2();
        // 将鼠标位置转换为圆坐标, 由于屏幕宽高未必一致，这里以宽度一半作为半径
        let x = (pageX - this.screen.width * 0.5 - this.screen.left) / (this.screen.width * 0.5);
        let y = (this.screen.height + 2 * (this.screen.top - pageY)) / this.screen.width;
        vector.set(x, y);
        return vector;
    }

    private _isRY: boolean = true;
    /**
     * 旋转实际相当于将手势在相机屏幕上的移动转化为在一个以焦点为圆心的球上的转动
     * moveDiection就是我们要将相机eye向量的旋转方向
  