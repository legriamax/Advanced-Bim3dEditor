
import { ColorDef } from "@/libs/const/enum";
import { AmbientLight, Camera, Color, DirectionalLight, DoubleSide, GridHelper, HemisphereLight, LineBasicMaterial, Mesh, MeshBasicMaterial, OrthographicCamera, PerspectiveCamera, PlaneBufferGeometry, Scene, Sprite, SpriteMaterial, sRGBEncoding, TextureLoader, Vector3, WebGLRenderer } from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import TrackCameraCtrl from "../ctrl/TrackCameraCtrl";

/**
 * @description 3D鸟瞰场景
 * @author songmy
 */
export default class MainScene implements IDispose {

    private readonly frustumSize: number = 10000;

    /** 平面宽度 */
    readonly PLANE_WIDTH = 200000;
    /** 平面长度 */
    readonly PLANE_HEIGTH = 200000;

    readonly near: number = 100;

    readonly far: number = 1000000;

    /** 场景 */
    private _scene: Scene;
    /** 平面 */
    private _plane: Mesh;
    /** 辅助网格 */
    private _grid: GridHelper;
    /** 环境光 */
    private _ambLight: AmbientLight;
    /** 摄像机:透视 */
    private _pcamera: PerspectiveCamera;
    /** 摄像机:正交 */
    private _ocamera: OrthographicCamera;
    /** 当前使用的摄像机 */
    private _camera: any;
    /** 渲染 */
    private _render: WebGLRenderer;
    /** css2drender */
    private _css2dReder: CSS2DRenderer;
    /** 视口宽 */
    private _viewWidth: number;
    /** 视口高 */
    private _viewHeight: number;
    /** 位置指示 */
    private _posTips: Sprite;

    /** 轨迹球控制器 */
    private _trackCtrl: TrackCameraCtrl;
    /** 当前控制器 */
    private _controls: any;

    get scene(): Scene {
        return this._scene;
    }

    get camera(): any {
        return this._camera;
    }

    get render(): WebGLRenderer {
        return this._render;
    }

    get css2dRender(): CSS2DRenderer {
        return this._css2dReder;
    }

    get controls(): any {
        return this._controls;
    }

    set viewWidth(value: number) {
        this._viewWidth = value;
    }

    get viewWidth(): number {
        return this._viewWidth;
    }

    set viewHeight(value: number) {
        this._viewHeight = value;
    }

    get viewHeight(): number {
        return this._viewHeight;
    }

    get PlaneMesh(): Mesh {
        return this._plane;
    }

    get posPoint(): Sprite {
        return this._posTips;
    }

    constructor() {

        this._viewWidth = window.innerWidth;
        this._viewHeight = window.innerHeight;

        this.createScene();
        this.createPCamera();