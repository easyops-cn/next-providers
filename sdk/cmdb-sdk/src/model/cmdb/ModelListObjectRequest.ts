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

  /** 筛选返回模型信息携带哪些属性，使用,分隔，不传则返回模型信息带有全部属性 */
  fields: string;

  /** 是否校验对模型的访问权限 */
  isValidatePermission: boolean;

  /** 按权限点action校验，默认按实例访问权限校验 */
  action: string;

  /** 模型的基本信息指定字段返回，使用,分隔，不传则返回模型全部基础信息字段，如果过滤条件中包含某些字段，那么baseFields的值也应该有这些字段，否则过滤无效 */
  baseFields: string;
}
