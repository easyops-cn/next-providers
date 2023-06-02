/** 通知配置 */
export interface ModelMessageConfig {
  /** 实例id */
  instanceId: string;

  /** 通知类型, 分别对应邮箱，企业微信，钉钉，钉钉机器人，自定义类型 */
  msgType: "email" | "wework" | "dingding" | "dingding_robot" | "custom";

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

  /** 自定义类型脚本内容 */
  scriptContent: string;
}
