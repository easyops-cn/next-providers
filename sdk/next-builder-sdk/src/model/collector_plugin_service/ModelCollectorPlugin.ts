/** 采集插件 */
export interface ModelCollectorPlugin {
  /** 实例Id */
  instanceId: string;

  /** 安装路径 */
  installPath: string;

  /** 备注 */
  memo: string;

  /** 名称 */
  name: string;

  /** 包Id */
  packageId: string;

  /** 关联插件包版本号 */
  packageVersion: string;

  /** 包版本id */
  packageVersionId: string;

  /** 脚本类型 */
  scriptType: string;

  /** 编码类型 */
  encodeType: string;

  /** 解析器 */
  interpreter: string;

  /** 参数 */
  params: ModelCollectorPlugin_params_item[];

  /** Agent类型 */
  agentType: string;

  /** 分类 */
  category: string;

  /** icon */
  icon: ModelCollectorPlugin_icon;

  /** 插件链接 */
  packageUrl: string;

  /** 采集插件配置模板 */
  template: string;

  /** 关联dashboard */
  dashboards: ModelCollectorPlugin_dashboards_item[];

  /** 关联采集指标集 */
  metricSets: ModelCollectorPlugin_metricSets_item[];

  /** 关联映射指标 */
  aliasMetrics: ModelCollectorPlugin_aliasMetrics_item[];

  /** 关联告警策略 */
  metricThresholdRules: ModelCollectorPlugin_metricThresholdRules_item[];

  /** 状态 */
  status: string;

  /** 关联模型id */
  relateObjectId: string;

  /** 套件图片链接 */
  image: string;

  /** 介绍页图片链接 */
  picURLs: string[];

  /** 插件安装信息 */
  installInfo: ModelCollectorPlugin_installInfo;

  /** sampler类型 */
  samplerType: "metric_sampler" | "trace_sampler" | "event_sampler";

  /** 采集任务配置 */
  jobFilter: ModelCollectorPlugin_jobFilter;

  /** 套件介绍信息 */
  readme: string;

  /** 采集方式 */
  collectType: string[];

  /** 执行采集的机器ip */
  collectAgent: string;

  /** 关联alertRule */
  alertRules: ModelCollectorPlugin_alertRules_item[];

  /** metricbeat的名称 */
  metricbeatName: string;

  /** 指标处理器 */
  processors: ModelCollectorPlugin_processors_item[];

  /** 额外信息 */
  extInfo: any;
}

export interface ModelCollectorPlugin_params_item {
  /** 名字 */
  name?: string;

  /** 值类型 */
  valueType?: string;

  /** 参数默认值 */
  defaultValue?: any;

  /** 前台是否显示 */
  display?: boolean;

  /** 用于前台展示参数的中文名 */
  displayName?: string;

  /** 用于前台展示参数的用途或填写方法 */
  description?: string;

  /** 参数用途 */
  use?: "collectorParams" | "collectParams";

  /** 是否选填 */
  optional?: boolean;
}

export interface ModelCollectorPlugin_icon {
  /** icon */
  icon?: string;

  /** lib */
  lib?: string;

  /** category */
  category?: string;

  /** prefix */
  prefix?: string;

  /** color */
  color?: string;
}

export interface ModelCollectorPlugin_dashboards_item {
  /** 名称 */
  name?: string;

  /** dashboard定义 */
  define?: Record<string, any>;
}

export interface ModelCollectorPlugin_metricSets_item {
  /** 名称 */
  name?: string;

  /** 指标集定义 */
  define?: Record<string, any>;
}

export interface ModelCollectorPlugin_aliasMetrics_item {
  /** 名称 */
  name?: string;

  /** 映射指标定义 */
  define?: Record<string, any>;
}

export interface ModelCollectorPlugin_metricThresholdRules_item {
  /** 名称 */
  name?: string;

  /** 策略定义 */
  define?: Record<string, any>;
}

export interface ModelCollectorPlugin_installInfo {
  /** 下载类型 */
  type?: "deployrepo";
}

export interface ModelCollectorPlugin_jobFilter {
  /** 筛选类型 */
  type?: string;

  /** 实例筛选条件 */
  query?: Record<string, any>;

  /** 采集频率 */
  interval?: number;
}

export interface ModelCollectorPlugin_alertRules_item {
  /** 告警规则名称 */
  name?: string;

  /** 规则描述 */
  description?: string;

  /** 资源类型 */
  objectId?: string;

  /** 优先级 */
  priority?: number;

  /** 告警通知策略 */
  alertNotifyStrategy?: Record<string, any>[];

  /** 监控实例策略 */
  cmdbInstanceStrategy?: Record<string, any>[];

  /** 告警条件策略 */
  alertConditionStrategy?: Record<string, any>[];

  /** 告警丰富策略 */
  alertMetricFillStrategy?: Record<string, any>[];

  /** 告警分组策略 */
  alertGroupStrategy?: Record<string, any>[];
}

export interface ModelCollectorPlugin_processors_item {
  /** 处理名称 */
  name?: string;

  /** 上一级处理步骤名称列表 */
  parents?: string[];

  /** 输出 */
  output?: Record<string, any>;

  /** 处理动作 */
  action?: Record<string, any>;
}
