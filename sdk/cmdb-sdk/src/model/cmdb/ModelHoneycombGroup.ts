/** HoneycombGroup */
export interface ModelHoneycombGroup {
  /** 分组字段值 */
  label: string;

  /** 分组字段描述 */
  labelDesc: string;

  /** 实例列表 */
  data: ModelHoneycombGroup_data_item[];

  /** 子节点列表 */
  children: Partial<ModelHoneycombGroup>[];

  /** 实例总数，包含子节点实例数 */
  total: number;
}

export interface ModelHoneycombGroup_data_item {
  /** 实例Id */
  instanceId?: string;

  /** 实例showKey */
  showKey?: string[];

  /** 用于填充颜色的指标值,如果无数据的话为null */
  fillByMetric?: any;

  /** 用于设置尺寸的指标值,如果无数据的话为null */
  sizeByMetric?: any;

  /** 额外字段 */
  extFields?: Record<string, any>;
}
