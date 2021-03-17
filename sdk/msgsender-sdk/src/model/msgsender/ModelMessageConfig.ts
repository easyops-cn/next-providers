/** 通知配置 */
export interface ModelMessageConfig {
  /** 实例id */
  instanceId: string;

  /** 名称 */
  name: string;

  /** 插件对应cmdb用户的字段名称 */
  cmdbUserObjectColName: string;

  /** 插件脚本的实际名称 */
  pluginName: string;

  /** 启用 */
  enable: string;

  /** 通知方式描述 */
  description: string;

  /** 插件服务端相关配置 */
  serverConfig: Record<string, any>;
}
