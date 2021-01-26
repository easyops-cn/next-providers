/** 查询策略路径节点，路径为点-边-点结构，因此偶数节点objectId等数据为空，奇数点relation_id等数据为空 */
export interface ModelStrategyPathNode {
  /** 节点模型ID */
  objectId: string;

  /** 节点查询条件 */
  query: Record<string, any>;

  /** 节点查询返回字段 */
  fields: ModelStrategyPathNode_fields_item[];

  /** 描述 */
  relationDescription: string;

  /** 关系id */
  relation_id: string;

  /** 关系对端id */
  relation_side_id: string;
}

export interface ModelStrategyPathNode_fields_item {
  /** 字段id */
  id?: string;

  /** 字段排序id, 与外层alias_id_sort对应 */
  alias_id?: string;
}
