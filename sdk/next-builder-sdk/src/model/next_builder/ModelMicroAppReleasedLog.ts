/** MicroApp发布日志 */
export interface ModelMicroAppReleasedLog {
  /** projectId */
  projectId: string;

  /** 版本 */
  version: string;

  /** 基于哪个版本打的包 */
  baseVersion: string;

  /** 提交用户 */
  commitUser: string;

  /** Description */
  description: string;

  /** StoryboardJson */
  storyboardJson: string;

  /** StoryboardJson URL */
  storyboardJsonUrl: string;

  /** 模型定义Json */
  modelsDefinitionJson: string;

  /** 创建时间 */
  ctime: string;

  /** 权限点资源Json */
  permissionsJson: string;

  /** 权限点资源Json URL */
  permissionsJsonUrl: string;

  /** ThemeJson */
  themeJson: string;

  /** ThemeJson URL */
  themeJsonUrl: string;

  /** 小产品id */
  appId: string;

  /** 打包状态 */
  packageStatus: string;

  /** 制品包信息 */
  packageInfo: ModelMicroAppReleasedLog_packageInfo;

  /** 打包错误信息 */
  errMsg: string;
}

export interface ModelMicroAppReleasedLog_packageInfo {
  /** packageId */
  packageId?: string;

  /** versionId */
  versionId?: string;

  /** naPackageId */
  naPackageId?: string;

  /** naVersionId */
  naVersionId?: string;

  /** rPackageId */
  rPackageId?: string;

  /** rVersionId */
  rVersionId?: string;
}
