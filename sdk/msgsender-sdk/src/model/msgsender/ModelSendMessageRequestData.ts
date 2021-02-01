import { ModelMessageReceiver, ModelMessageData } from ".";

/** 发送通知的请求body数据 */
export interface ModelSendMessageRequestData {
  /** 消息接受者 */
  receivers: Partial<ModelMessageReceiver>[];

  /** 发送消息的内容 */
  msg_data: Partial<ModelMessageData>;
}
