/** 查询策略路径节点基本信息，路径为点-边-点结构，因此偶数节点objectId,object_name等数据为空，奇数点relation_id, relation_side_name等数据为空 */
export interface ModelStrategyPathNodeBasic {
  /** 节点模型ID */
  objectId: string;

  /** 节点模型名称 */
  object_name: string;

  /** 关系id */
  relation_id: string;

  /** 关系对端id */
  relation_side_id: string;

  /** 关系对端名称 */
  relation_side_name: string;
}
