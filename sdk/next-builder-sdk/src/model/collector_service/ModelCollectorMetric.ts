import { ModelCollectorPluginBase } from ".";

/** 采集指标（原始指标, 这个模型存储的是从zabbix, prometheus导入的原始指标。平台管理的是映射后的指标见CollectorAliasMetric模型） */
export interface ModelCollectorMetric {
  /** 指标名 */
  name: string;

  /** 指标名 */
  keyName: string;

  /** 标签 */
  labels: string[];

  /** 指标id */
  metricId: string;

  /** 指标版本 */
  version: number;

  /** 指标key */
  key: string;

  /** 指标类型 */
  metricType:
    | "gauge"
    | "delta-speed"
    | "delta-change"
    | "summary"
    | "counter"
    | "histogram"
    | "stateset"
    | "info"
    | "gaugehistogram";

  /** 指标数据类型 */
  dataType: "double" | "string" | "long";

  /** 所属Agent */
  agentType: "zabbix" | "prometheus" | "easyops" | "calculated";

  /** 计算表达式 */
  expression: string;

  /** 维度定义 */
  tagDefine: ModelCollectorMetric_tagDefine_item[];

  /** 参数定义 */
  paramDefine: ModelCollectorMetric_paramDefine_item[];

  /** 帮助 */
  help: string;

  /** 单位 */
  unit: string;

  /** 采集指标实例版本号 */
  metricVersion: number;

  /** 采集插件(deprecated) */
  plugin: ModelCollectorMetric_plugin;

  /** 采集插件 */
  collectorPlugin: Partial<ModelCollectorPluginBase>;

  /** 第三方指标来源 */
  customSourceName: string;

  /** 指标集 */
  metricset: string;
}

export interface ModelCollectorMetric_tagDefine_item {
  /** 名字 */
  name?: string;

  /** 默认值 */
  default?: string;

  /** 是否只读 */
  readOnly?: boolean;

  /** 描述 */
  description?: string;

  /** 值类型 */
  valueType?: string;
}

export interface ModelCollectorMetric_paramDefine_item {
  /** 名字 */
  name?: string;

  /** 值类型 */
  valueType?: string;

  /** 默认值 */
  default?: string;

  /** 是否只读 */
  readOnly?: boolean;
}

export interface ModelCollectorMetric_plugin {
  /** 插件名称 */
  name?: string;

  /** 插件路径 */
  path?: string;
}
