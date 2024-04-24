/** 表示拓扑的数据 */
export interface ModelCollectStrategyData {
  /** dataId，目前无法确定用处 */
  dataId: string;

  /** 指在数据的来源类型，一般值为数据源类型，经过合并后值不准确 */
  type: string;

  /** 节点，一般必须包含id这个字段 */
  nodes: Record<string, any>[];

  /** 边的定义，一般必须包含：source、target */
  edges: Record<string, any>[];

  /** 非边或节点的数据，用于调和阶段使用。 */
  extData: ModelCollectStrategyData_extData_item[];
}

export interface ModelCollectStrategyData_extData_item {
  /** 表明调和策略的类型 */
  gatherType?: string;

  /** 表明数据来自哪个调和策略 */
  gatherDataId?: string;

  /** 保存的额外数据 */
  datas?: Record<string, any>[];
}
