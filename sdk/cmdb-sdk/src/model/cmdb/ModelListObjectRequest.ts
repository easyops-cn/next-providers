/** ListObjectRequest */
export interface ModelListObjectRequest {
  /** 按模型Id,模型id模糊匹配 */
  q: string;

  /** 模型Id, 使用,分隔 */
  objectIds: string;

  /** system */
  system: string;

  /** 分类,xx:精确匹配，xx%:匹配xx或xx.*，xx.%:匹配xx\..* */
  category: string;

  /** 是否只返回category为空的模型，为true时会忽略参数category */
  emptyCategory: boolean;

  /** 是否只返回system为空的模型，为true时会忽略参数system，废弃(请使用visible代替) */
  emptySystem: boolean;

  /** 是否是抽象模型,true/false,为空则不过滤 */
  isAbstract: string;

  /** 按父模型过滤 */
  parentObjectId: string;

  /** visible:只返回可见模型，invisible:只返回不可见模型，all:返回所有模型, 默认all */
  visible: "visible" | "invisible" | "all";

  /** 屏蔽的模型Id, 使用,分隔 */
  blockObjectIds: string;
}
