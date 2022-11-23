import { service } from "@/libs/const/enum";
import ServiceBase from "./ServiceBase";
import ServiceManager from "./ServiceManager";

/**
 * @description 服务容器
 * @author songmy
 */
export default class ServiceContainer {

    private _scheme: any;

    private _cad: any;

    private _scene: any;

    private _mesh: any;

    /**
     * 是否存在服务<br>
     * @param type
     * @return
     *
     */
    static hasService(type: string): boolean {
        return ServiceManager.ins.getService(type) != null;
    }

    /**
     * 获取服务
     * @param type
     * @returns
     */
    private tryGetService(type: string): ServiceBase {
        var service: ServiceBase | undefined = ServiceManager.ins.getService(type);
        if (!service) {
            throw Error("服务获取失败:" + type);
        }
        return service;
    }

    /**
     * cad