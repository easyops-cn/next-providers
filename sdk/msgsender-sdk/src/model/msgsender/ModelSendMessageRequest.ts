import { ModelSendMessageRequestData } from ".";

/** 发送通知的请求body */
export interface ModelSendMessageRequest {
  /** 发送通知的请求数据 */
  data: Partial<ModelSendMessageRequestData>;
}
