
import { TCState } from "@/libs/const/enum";
import { MOUSE, OrthographicCamera, PerspectiveCamera, Quaternion, Vector2, Vector3 } from "three";


/**
 * @description 视角翻转控制器
 * 其实只需要改变相机的位置和朝向就能看到世界的各个方面属性，
 * 位置和朝向的改变通常需要用到四元素、球面坐标、向量计算等,
 * @author songmy
 * @since 2022/2/25
 */
export default