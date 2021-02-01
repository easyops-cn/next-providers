/** MicroApp发布日志 */
export interface ModelMicroAppReleasedLog {
  /** projectId */
  projectId: string;

  /** 版本 */
  version: string;

  /** 提交用户 */
  commitUser: string;

  /** Description */
  description: string;

  /** StoryboardJson */
  storyboardJson: string;

  /** 模型定义Json */
  modelsDefinitionJson: string;

  /** 创建时间 */
  ctime: string;

  /** 权限点资源Json */
  permissionsJson: string;
}
