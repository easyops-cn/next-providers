/** 我的收藏 */
export interface ModelMyCollection {
  /** 名称 */
  name: string;

  /** 收藏名称 */
  collectionName: string;

  /** 产品模块 */
  module: string;

  /** 我的收藏payload */
  payloads: ModelMyCollection_payloads_item[];
}

export interface ModelMyCollection_payloads_item {
  /** 名称 */
  name?: string;

  /** 实例id */
  instanceId?: string;

  /** 跳转目标 */
  url?: string;
}
