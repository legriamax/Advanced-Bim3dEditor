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
    static RIGHT_MOUSE_DOWN: string = "rightmousedown";
    /** 定义 rightmouseup 事件对象的 type 属性值。*/
    static RIGHT_MOUSE_UP: string = "rightmouseup";
    /** 定义 rightclick 事件对象的 type 属性值。*/
    static RIGHT_CLICK: string = "rightclick";
    /** 定义 mousemove 事件对象的 type 属性值。*/
    static MOUSE_MOVE: string = "mousemove";
    /** 定义 mouseover 事件对象的 type 属性值。*/
    static MOUSE_OVER: string = "mouseover";
    /** 定义 mouseout 事件对象的 type 属性值。*/
    static MOUSE_OUT: string = "mouseout";
    /** 定义 mousewheel 事件对象的 type 属性值。*/
    static MOUSE_WHEEL: string = "mousewheel";
    /** 定义 mouseover 事件对象的 type 属性值。*/
    static ROLL_OVER: string = "mouseover";
    /** 定义 mouseout 事件对象的 type 属性值。*/
    static ROLL_OUT: string = "mouseout";
    /** 定义 doubleclick 事件对象的 type 属性值。*/
    static DOUBLE_CLICK: string = "doubleclick";
    /** 定义 change 事件对象的 type 属性值。*/
    static CHANGE: string = "change";
    /** 定义 changed 事件对象的 type 属性值。*/
    static CHANGED: string = "changed";
    /** 定义 resize 事件对象的 type 属性值。*/
    static RESIZE: string = "resize";
    /** 定义 added 事件对象的 type 属性值。*/
    static ADDED: string = "added";
    /** 定义 removed 事件对象的 type 属性值。*/
    static REMOVED: string = "removed";
    /** 定义 display 事件对象的 type 属性值。*/
    static DISPLAY: string = "display";
    /** 定义 undisplay 事件对象的 type 属性值。*/
    static UNDISPLAY: string = "undisplay";
    /** 定义 error 事件对象的 type 属性值。*/
    static ERROR: string = "error";
    /** 定义 complete 事件对象的 type 属性值。*/
    static COMPLETE: string = "complete";
    /** 定义 loaded 事件对象的 type 属性值。*/
    static LOADED: string = "loaded";
    /** 定义 loaded 事件对象的 type 属性值。*/
    static READY: string = "ready";
    /** 定义 progress 事件对象的 type 属性值。*/
    static PROGRESS: string = "progress";
    /** 定义 input 事件对象的 type 属性值。*/
    static INPUT: string = "input";
    /** 定义 render 事件对象的 type 属性值。*/
    static RENDER: string = "render";
    /** 定义 open 事件对象的 type 属性值。*/
    static OPEN: string = "open";
    /** 定义 message 事件对象的 type 属性值。*/
    static MESSAGE: string = "message";
    /** 定义 close 事件对象的 type 属性值。*/
    static CLOSE: string = "close";
    /** 定义 keydown 事件对象的 type 属性值。*/
    static KEY_DOWN: string = "keydown";
    /** 定义 keypress 事件对象的 type 属性值。*/
    static KEY_PRESS: string = "keypress";
    /** 定义 keyup 事件对象的 type 属性值。*/
    static KEY_UP: string = "keyup";
    /** 定义 frame 事件对象的 type 属性值。*/
    static FRAME: string = "enterframe";
    /** 定义 dragstart 事件对象的 type 属性值。*/
    static DRAG_START: string = "dragstart";
    /** 定义 dragmove 事件对象的 type 属性值。*/
    static DRAG_MOVE: string = "dragmove";
    /** 定义 dragend 事件对象的 type 属性值。*/
    static DRAG_END: string = "dragend";
    /** 定义 enter 事件对象的 type 属性值。*/
    static ENTER: string = "enter";
    /** 定义 select 事件对象的 type 属性值。*/
    static SELECT: string = "select";
    /** 定义 blur 事件对象的 type 属性值。*/
    static BLUR: string = "blur";
    /** 定义 focus 事件对象的 type 属性值。*/
    static FOCUS: string = "focus";
    /** 定义 visibilitychange 事件对象的 type 属性值。*/
    static VISIBILITY_CHANGE: string = "visibilitychange";
    /** 定义 focuschange 事件对象的 type 属性值。*/
    static FOCUS_CHANGE: string = "focuschange";
    /** 定义 played 事件对象的 type 属性值。*/
    static PLAYED: string = "played";
    /** 定义 paused 事件对象的 type 属性值。*/
    static PAUSED: string = "paused";
    /** 定义 stopped 事件对象的 type 属性值。*/
    static STOPPED: string = "stopped";
    /** 定义 start 事件对象的 type 属性值。*/
    static START: string = "start";
    /** 定义 end 事件对象的 type 属性值。*/
    static END: string = "end";
    /** 定义 componentadded 事件对象的 type 属性值。*/
    static COMPONENT_ADDED: string = "componentadded";
    /** 定义 componentremoved 事件对象的 type 属性值。*/
    static COMPONENT_REMOVED: string = "componentremoved";
    /** 定义 released 事件对象的 type 属性值。*/
    static RELEASED: string = "released";
    /** 定义 link 事件对象的 type 属性值。*/
    static LINK: string = "link";
    /** 定义 label 事件对象的 type 属性值。*/
    static LABEL: string = "label";
    /**浏览器全屏更改时触发*/
    static FULL_SCREEN_CHANGE: string = "fullscreenchange";
    /**显卡设备丢失时触发*/
    static DEVICE_LOST: string = "devicelost";
    /**世界矩阵更新时触发。*/
    static TRANSFORM_CHANGED: string = "transformchanged";
    /**更换动作时触发。*/
    static ANIMAT