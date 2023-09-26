import { ModelMicroAppDevelopmentEnv } from ".";
import { ModelCmdbObject } from "../cmdb";

/** 小产品项目 */
export interface ModelMicroAppProject {
  /** cmdb实例标识 */
  instanceId: string;

  /** projectId */
  projectId: string;

  /** name */
  name: string;

  /** appId */
  appId: string;

  /** Origin AppId */
  originAppId: string;

  /** Base Version */
  baseVersion: string;

  /** model列表 */
  models: string[];

  /** UI版本 */
  uiVersion: string;

  /** 开发环境 */
  developmentEnv: Partial<ModelMicroAppDevelopmentEnv>;

  /** app配置 */
  appSetting: ModelMicroAppProject_appSetting;

  /** type */
  type: "git" | "svn" | "storyboard";

  /** Storyboard Json */
  storyboardJson: string;

  /** Storyboard Json URL */
  storyboardJsonUrl: string;

  /** Dependencies */
  dependencies: ModelMicroAppProject_dependencies_item[];

  /** DependenciesLock */
  dependenciesLock: ModelMicroAppProject_dependenciesLock_item[];

  /** Depends All */
  dependsAll: boolean;

  /** 模型 */
  modelObjects: ModelMicroAppProject_modelObjects_item[];

  /** 图片库 */
  images: ModelMicroAppProject_images_item[];

  /** 模型定义 */
  modelsDefinition: Partial<ModelCmdbObject>[];

  /** 最新一次export的模型定义 */
  lastExportedModelsDefinition: string;

  /** 最新一次发布的模型定义，已弃用，新的存放位置：MicroAppReleasedLog.modelsDefinitionJson(deprecated) */
  lastReleasedModelsDefinition: string;

  /** 权限点列表 */
  permissions: ModelMicroAppProject_permissions_item[];

  /** 最新一次export的权限点 */
  lastExportedPermissions: string;

  /** 权限点资源Json URL */
  permissionsJsonUrl: string;

  /** 最新一次export的文档 */
  lastExportedDocuments: string;

  /** 克隆自 */
  clonedFrom: ModelMicroAppProject_clonedFrom;

  /** 使用的主题模板ID */
  useThemeId: string;

  /** storyboardType */
  storyboardType: "micro-app" | "templates" | "theme-template";

  /** 微应用描述信息 */
  description: string;

  /** 框架版本 */
  brickNextVersion: number;

  /** 当前项目所在分支 */
  curBranch: string;
}

export interface ModelMicroAppProject_appSetting {
  /** name */
  name?: string;

  /** homepage */
  homepage?: string;

  /** app图标url */
  appIconUrl?: string;

  /** app图标 */
  icon?: string;

  /** 默认配置 */
  defaultConfig?: string;

  /** Env配置 */
  env?: string;

  /** 是否内置应用 */
  internal?: boolean;

  /** Legacy */
  legacy?: string;

  /** 是否私有 */
  private?: boolean;

  /** 图标背景 */
  iconBackground?: string;

  /** locales */
  locales?: any;

  /** 可见性等级 */
  visibility?: "internal" | "public";

  /** 布局类型 */
  layoutType?: string;

  /** 免登录 */
  noAuthGuard?: boolean;

  /** 默认面包屑配置 */
  breadcrumb?: string;

  /** 使用的主题 */
  theme?: string;

  /** 默认容器 */
  defaultContainer?: any;
}

export interface ModelMicroAppProject_dependencies_item {
  /** Name */
  name?: string;

  /** Constraint */
  constraint?: string;

  /** IsLocalDeploy */
  localDeploy?: boolean;

  /** 是否使用最新开发版本 */
  isDeveloping?: boolean;
}

export interface ModelMicroAppProject_dependenciesLock_item {
  /** Name */
  name?: string;

  /** Constraint */
  constraint?: string;

  /** IsLocalDeploy */
  localDeploy?: boolean;

  /** packageId */
  packageId?: string;

  /** versionId */
  versionId?: string;

  /** actualVersion */
  actualVersion?: string;

  /** 被谁依赖 */
  parentDependency?: string;

  /** 依赖方式 */
  dependencyWay?: "direct" | "indirect";

  /** 是否使用最新开发版本 */
  isDeveloping?: boolean;
}

export interface ModelMicroAppProject_modelObjects_item {
  /** objectId */
  objectId?: string;

  /** namespace */
  namespace?: string;
}

export interface ModelMicroAppProject_images_item {
  /** 图片名 */
  name?: string;

  /** 图片地址 */
  url?: string;

  /** 来源 */
  from?: string;
}

export interface ModelMicroAppProject_permissions_item {
  /** 权限备注，即权限名称 */
  remark?: string;

  /** 需要鉴权的动作, 全局唯一，在小产品project中，会少前缀 `next-builder:<appId>:`，导出或者安装时会补全 */
  action?: string;
}

export interface ModelMicroAppProject_clonedFrom {
  /** appId */
  appId?: string;

  /** appName */
  appName?: string;
}
