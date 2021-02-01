/** 告警发送通知的请求body */
export interface ModelSendMessageForAlertRequest {
  /** 告警数据 */
  data: Record<string, any>;

  /** 数据源 */
  system: string;
}
