/** 通知的接收者 */
export interface ModelMessageReceiver {
  /** 用户名(带:前缀则按实例ID处理) */
  user: string;

  /** 用户组名(带:前缀则按实例ID处理) */
  user_group: string;

  /** 邮箱地址 */
  email_addr: string;

  /** 通知方式 */
  method: string;
}
