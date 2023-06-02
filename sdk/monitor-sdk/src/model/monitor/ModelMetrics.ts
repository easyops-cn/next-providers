/** 采集指标配置 */
export interface ModelMetrics {
  /** 保持策略 */
  retention_policy: string;

  /** 指标描述 */
  description: string;

  /** 数据类型 */
  data_type: string;

  /** 数据名称 */
  data_name: string;

  /** CUSTOM */
  custom: boolean;

  /** 指标配置版本 */
  version: number;

  /** 格式 */
  formats: ModelMetrics_formats_item[];

  /** ORG */
  org: number;

  /** ID */
  _id: string;

  /** 创建者 */
  creator: string;

  /** 修改者 */
  modifier: string;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;
}

export interface ModelMetrics_formats_item {
  /** 配置ID */
  config_id?: string;

  /** 最大int */
  max_int_col?: number;

  /** 最大string */
  max_string_col?: number;

  /** 最大int */
  max_text_col?: number;

  /** 最大double */
  max_double_col?: number;

  /** 最大dim */
  max_dim_col?: number;

  /** table */
  table?: string;

  /** aggregation */
  aggregation?: boolean;

  /** 字段 */
  fields?: ModelMetrics_formats_item_fields_item[];
}

export interface ModelMetrics_formats_item_fields_item {
  /** 字段类型 */
  field_type?: string;

  /** 字段描述 */
  description?: string;

  /** 字段名称 */
  field_name?: string;

  /** 字段值类型 */
  field_value_type?: string;

  /** 状态百分比 */
  stat_period?: number;

  /** 状态类型 */
  stat_type?: string;

  /** 单位 */
  unit?: string;

  /** 列名 */
  column_name?: string;
}
