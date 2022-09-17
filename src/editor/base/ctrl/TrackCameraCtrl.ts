
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