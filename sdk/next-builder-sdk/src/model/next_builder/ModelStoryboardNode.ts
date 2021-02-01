import {
  ModelStoryboardBrick,
  ModelStoryboardRoute,
  ModelStoryboardTemplate,
} from ".";

/** Storyboard节点(父模型) */
export interface ModelStoryboardNode {
  /** 实例标识 */
  instanceId: string;

  /** 别名 */
  alias: string;

  /** micro_app ID */
  appId: string;

  /** 节点标识 */
  id: string;

  /** 挂载点 */
  mountPoint: string;

  /** 排序 */
  sort: number;

  /** 类型 */
  type:
    | "brick"
    | "provider"
    | "template"
    | "routes"
    | "bricks"
    | "redirect"
    | "custom-template";

  /** 当type为"brick", "provider", "template"时，填充该字段属性 */
  brick: Partial<ModelStoryboardBrick>;

  /** 当type为"routes", "bricks", "redirect"时，填充该字段属性 */
  route: Partial<ModelStoryboardRoute>;

  /** 当type为"custom-template"时，填充该字段属性 */
  template: Partial<ModelStoryboardTemplate>;

  /** 父节点 */
  parent: Partial<ModelStoryboardNode>;

  /** 子节点 */
  children: Partial<ModelStoryboardNode>[];
}
