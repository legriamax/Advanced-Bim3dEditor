import Imgr from "./base/mgr";
import ServiceContainer from "./base/server/ServiceContainer";
import { EventDispatcher } from "./framework/event/EventDispatcher";
import { KeyBoardManager } from "./framework/event/KeyBoardManager";
import Service from "./service";

export default class BIM {

    static mode: number;

    static container: any;

    static uicontainer:any;
    
    /** 管理 */
    static readonly MGR: Imgr = new Imgr();
    /** 全局服务容器 */
    static readonly SC: ServiceCo