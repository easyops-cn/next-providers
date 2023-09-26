/** 关联资源 */
export interface ModelRelatedResource {
  /** 实例ID */
  instanceId: string;

  /** 关联名称 */
  name: string;

  /** 所属模型id */
  objectId: string;

  /** 关联模型Id */
  relatedObjectId: string;

  /** query参数,预留字段 */
  query: string;

  /** 资源模型路径实例查询key信息 */
  relatedInfo: ModelRelatedResource_relatedInfo;

  /** 表达式列表 */
  expressionList: ModelRelatedResource_expressionList_item[];
}

export interface ModelRelatedResource_relatedInfo {
  /** id */
  id?: string;

  /** 描述 */
  label?: string;

  /** query条件key,反向 */
  reverseQueryKey?: string;

  /** 路径信息,正向 */
  path?: Record<string, any>[];
}

export interface ModelRelatedResource_expressionList_item {
  /** 表达式 */
  expression?: string;
}
