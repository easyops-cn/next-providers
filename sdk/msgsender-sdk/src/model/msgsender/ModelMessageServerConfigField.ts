/** 通知配置的服务器配置字段定义 */
export interface ModelMessageServerConfigField {
  /** 配置字段名称 */
  name: string;

  /** 配置字段展示类型。如果是password类型，需要加密展示 */
  type: string;
}
