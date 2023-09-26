/** 采集指标集 */
export interface ModelMetricSet {
  /** 名称 */
  name: string;

  /** 关联模型 */
  relateObjectId: string;

  /** 是否保护 */
  protected: boolean;
}
