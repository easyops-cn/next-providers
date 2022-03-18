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

  /** model列表 */
  models: string[];

  /** 开发环境 */
  developmentEnv: ModelMicroAppProject_developmentEnv;

  /** app配置 */
  appSetting: ModelMicroAppProject_appSetting;

  /** type */
  type: "git" | "svn" | "storyboard";

  /** Storyboard Json */
  storyboardJson: string;

  /** Dependencies */
  dependencies: ModelMicroAppProject_dependencies_item[];

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

  /** 最新一次export的文档 */
  lastExportedDocuments: string;
}

export interface ModelMicroAppProject_developmentEnv {
  /** open api gateway ip */
  openApiIP?: string;

  /** open api gateway port */
  openApiPort?: number;

  /** open api access key */
  accessKey?: string;

  /** open api secret key */
  secretKey?: string;

  /** protocol */
  protocol?: "http" | "https";
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
