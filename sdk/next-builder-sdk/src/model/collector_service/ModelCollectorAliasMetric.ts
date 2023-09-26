import {
  ModelCollectorAliasMetricDim,
  ModelCollectorMetric,
  ModelMetricSet,
  ModelSelfRelateExpression,
} from ".";
import { ModelRelatedResource } from "../resource_monitor";

/** 采集指标 */
export interface ModelCollectorAliasMetric {
  /** 指标id */
  instanceId: string;

  /** 指标名 */
  name: string;

  /** 维度列表 */
  dims: Partial<ModelCollectorAliasMetricDim>[];

  /** 指标版本 */
  version: number;

  /** 是否为关键指标 */
  isKeyMetric: boolean;

  /** 指标描述 */
  description: string;

  /** 关联资源id */
  objectId: string;

  /** 原始指标列表 */
  originalMetrics: Partial<ModelCollectorMetric>[];

  /** 依赖指标列表 */
  dependMetrics: Partial<ModelCollectorAliasMetric>[];

  /** 被依赖指标列表 */
  defineMetrics: Partial<ModelCollectorAliasMetric>[];

  /** 关联资源定义 */
  relatedResourceInfo: Partial<ModelRelatedResource>[];

  /** 是否计算类型的指标 */
  isCalculated: boolean;

  /** 计算表达式（calculated的指标用） */
  expression: string;

  /** 汇聚频率 */
  resolution: number;

  /** 指标类型 */
  type: "normal" | "calculated" | "aggregated";

  /** 是否禁用 */
  disabled: boolean;

  /** 单位 */
  unit: string;

  /** 数据类型 */
  dataType: string;

  /** 指标别名 */
  displayName: string;

  /** 指标集 */
  metricSet: Partial<ModelMetricSet>[];

  /** 用于keyMetrics排序，默认值为0。值为1表示比其他值更靠前。 */
  keyMetricOrder: number;

  /** 自关联计算表达式 */
  selfRelateExpression: Partial<ModelSelfRelateExpression>[];

  /** 是否保护 */
  protected: boolean;
}
