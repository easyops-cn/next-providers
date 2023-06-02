/** 应用评分配置采集项 */
export interface ModelAppHealthConfigMetrics {
  /** 指标表 */
  table: string;

  /** 说明 */
  description: string;

  /** 字段 */
  key: string;

  /** 采集项类型 */
  metric_type: string;

  /** 聚合方式 */
  aggregation: "min" | "avg" | "sum" | "max";

  /** 过滤条件 */
  filters: ModelAppHealthConfigMetrics_filters_item[];

  /** 阈值区间 */
  ranges: ModelAppHealthConfigMetrics_ranges_item[];
}

export interface ModelAppHealthConfigMetrics_filters_item {
  /** 参数名 */
  name?: string;

  /** 比较方式 */
  op?: "in";

  /** 参数值 */
  variable?: string;
}

export interface ModelAppHealthConfigMetrics_ranges_item {
  /** 分值 */
  score?: number;

  /** 区间闭合类型 */
  type?: "()" | "(]" | "[)" | "[]";

  /** 最小值 */
  min_value?: any;

  /** 最大值 */
  max_value?: any;
}
