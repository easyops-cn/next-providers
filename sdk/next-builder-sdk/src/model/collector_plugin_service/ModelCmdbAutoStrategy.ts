/** cmdb自动发现策略 */
export interface ModelCmdbAutoStrategy {
  /** 实例Id */
  instanceId: string;

  /** 所属模型ID */
  model: string;

  /** 名称 */
  name: string;

  /** 特征规则 */
  featureRule: ModelCmdbAutoStrategy_featureRule_item[];

  /** 描述 */
  description: string;

  /** 服务种类 */
  serviceCategory: string;

  /** 优先级 */
  priority: number;

  /** 是否内置 */
  protected: boolean;

  /** 是否启用 */
  enabled: boolean;

  /** 是否识别应用服务 */
  isMatchApp: boolean;

  /** 分类 */
  classification: string;

  /** 层级 */
  layer: string;
}

export interface ModelCmdbAutoStrategy_featureRule_item {
  /** 字段 */
  key?: string;

  /** 比较器 */
  method?: "eq" | "ne" | "like" | "nlike";

  /** 值 */
  value?: string;
}
