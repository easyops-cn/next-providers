import { ModelSendMessageRequestData } from ".";

/** 发送带附件的通知的请求body */
export interface ModelSendMessageWithAppendixRequest {
  /** 发送通知的请求数据 */
  data: Partial<ModelSendMessageRequestData>;

  /** 附件的二进制数据 */
  files: File;
}
