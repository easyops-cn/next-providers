/** 资源发现规则配置 */
export interface ModelResourceDiscoveryRuleConfig {
  /** 实例Id */
  instanceId: string;

  /** 模型ID */
  objectId: string;

  /** 是否启用网络扫描 */
  enableNetScan: boolean;

  /** 是否启用规则 */
  enableRules: boolean;

  /** 是否支持网络扫描 */
  supportNetScan: boolean;

  /** 是否被用户修改过 */
  userModified: boolean;

  /** 服务聚类规则 */
  serviceRules: ModelResourceDiscoveryRuleConfig_serviceRules_item[];

  /** 对应部署实例id */
  artifactInstanceObjectId: string;

  /** 模型类型，服务模型为"service", 部署实例为空 */
  objectType: string;

  /** nmap类型 */
  nmapType: string;

  /** 优先级 */
  priority: number;

  /** 进程黑名单 */
  processBlacklist: ModelResourceDiscoveryRuleConfig_processBlacklist_item[];

  /** 通用资源配置 */
  generalResourceConfig: ModelResourceDiscoveryRuleConfig_generalResourceConfig;
}

export interface ModelResourceDiscoveryRuleConfig_serviceRules_item {
  /** 特征项 */
  feature?: string;

  /** 比较器 */
  comparator?: string;

  /** 特征值 */
  value?: string;

  /** 是否内置 */
  protected?: boolean;

  /** 是否启用 */
  enabled?: boolean;
}

export interface ModelResourceDiscoveryRuleConfig_processBlacklist_item {
  /** 特征项 */
  feature?: string;

  /** 比较器 */
  comparator?: string;

  /** 特征值 */
  value?: string;

  /** 是否内置 */
  protected?: boolean;
}

export interface ModelResourceDiscoveryRuleConfig_generalResourceConfig {
  /** 是否上报通用资源 */
  reportGeneralResource?: boolean;

  /** 进程启动时间 */
  processElapsedTime?: number;

  /** 全量上报间隔 */
  fullReportInterval?: number;

  /** 采集限制 */
  maxReportNum?: number;
}
