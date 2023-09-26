import { ModelResourceDiscoveryRuleConfig } from "../cmdb";
import {
  ModelCollectorPlugin,
  ModelCmdbAutoStrategy,
  ModelHttpCollectCommand,
} from "../collector_plugin_service";

/** 采集插件 */
export interface ModelCollectorPluginBase {
  /** 实例Id */
  instanceId: string;

  /** 名称 */
  name: string;

  /** 包Id */
  packageId: string;

  /** 关联插件包版本号 */
  packageVersion: string;

  /** 包版本id */
  packageVersionId: string;

  /** 安装路径 */
  installPath: string;

  /** 参数 */
  params: ModelCollectorPlugin["params"];

  /** 采集插件配置模板 */
  template: string;

  /** 插件安装信息 */
  installInfo: ModelCollectorPlugin["installInfo"];

  /** sampler类型 */
  samplerType: "metric_sampler" | "trace_sampler" | "event_sampler";

  /** 指标处理器 */
  processors: ModelCollectorPlugin["processors"];

  /** 额外信息 */
  extInfo: any;

  /** 插件类型 */
  pluginType: "exporter" | "simple-script";

  /** 插件采集指令 */
  collectCommands: ModelCollectorPluginBase_collectCommands;

  /** cmdb自动发现策略列表(deprecated) */
  relateAutoStrategies: Partial<ModelCmdbAutoStrategy>[];

  /** 新版cmdb自动发现策略列表 */
  relateResourceDiscoveryRuleConfig: Partial<ModelResourceDiscoveryRuleConfig>[];
}

export interface ModelCollectorPluginBase_collectCommands {
  /** 命令类型 */
  type?: string;

  /** http类型的采集类型 */
  httpCollectCommand?: Partial<ModelHttpCollectCommand>;
}
