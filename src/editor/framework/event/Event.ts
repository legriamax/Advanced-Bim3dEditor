import { Object3D } from "three";

/**
 * Event是事件类型的集合。一般当发生事件时，Event对象将作为参数传递给事件侦听器。
 */
export class Event {

    /** 一个空的 Event 对象。用于事件派发中转使用。*/
    static EMPTY: Event = new Event();
    /** 定义 mousedown 事件对象的 type 属性值。*/
    static MOUSE_DOWN: string = "mousedown";
    /** 定义 mouseup 事件对象的 type 属性值。*/
    static MOUSE_UP: string = "mouseup";
    /** 定义 click 事件对象的 type 属性值。*/
    static CLICK: string = "click";
    /** 定义 rightmousedown 事件对象的 type 属性值。*/
    static RIGHT_MOUSE_DOWN: strin