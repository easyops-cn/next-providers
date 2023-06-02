/** 翻译规则 */
export interface ModelTransalteRule {
  /** 类别 */
  category: string;

  /** 翻译规则名称 */
  name: string;

  /** 翻译字段 */
  translate_fields: ModelTransalteRule_translate_fields_item[];

  /** 关联模型id */
  object_id: string;

  /** 匹配规则 */
  match_fields: ModelTransalteRule_match_fields_item[];

  /** 类型 */
  type: string;

  /** 数据源 */
  data_names: string[];

  /** 数据获取方法 */
  fetcher: string;

  /** 是否受保护 */
  protected: boolean;

  /** 是否启用 */
  disabled: boolean;

  /** org */
  org: number;

  /** 翻译规则ID */
  _id: string;
}

export interface ModelTransalteRule_translate_fields_item {
  /** 输出名称 */
  stream_key?: string;

  /** 资源字段 */
  object_key?: string;
}

export interface ModelTransalteRule_match_fields_item {
  /** 上报维度 */
  stream_key?: string;

  /** 资源字段 */
  object_key?: string;
}
