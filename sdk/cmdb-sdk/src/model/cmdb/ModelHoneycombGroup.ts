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
}

export interface ModelHoneycombGroup_data_item {
  /** 实例Id */
  instanceId?: string;

  /** 实例showKey */
  showKey?: string[];

  /** 用于填充颜色的指标值 */
  fillByMetric?: number;

  /** 用于设置颜色的指标值 */
  sizeByMetric?: number;
}
