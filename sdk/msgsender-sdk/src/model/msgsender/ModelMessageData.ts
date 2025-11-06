/** 消息的内容 */
export interface ModelMessageData {
  /** 通知的内容(正文) */
  content: string;

  /** 通知标题(邮件通知方式用) */
  subject: string;

  /** 抄送的邮箱地址 */
  cc_addr: string[];

  /** 抄送的用户列表(带:前缀则按实例ID处理) */
  cc_user: string[];

  /** 抄送的用户组列表(带:前缀则按实例ID处理) */
  cc_group: string[];

  /** 邮件发送者的名称 */
  from_name: string;

  /** 邮件发送者的邮箱地址 */
  from_addr: string;

  /** 邮件内容类型 */
  msg_type: "plain" | "html";

  /** 扩展字段 */
  extraData: Record<string, any>;
}
