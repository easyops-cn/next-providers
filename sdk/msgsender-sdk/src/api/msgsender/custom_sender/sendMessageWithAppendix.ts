import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelSendMessageWithAppendixRequest } from "../../../model/msgsender";

export type SendMessageWithAppendixRequestBody = Partial<ModelSendMessageWithAppendixRequest> &
  ModelSendMessageWithAppendixRequest_partial;

export type SendMessageWithAppendixResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  SendMessageWithAppendixResponseBody_2;

/**
 * @description 处理带附件的通知消息
 * @endpoint post /api/v1/message_sender/mail_with_appendix
 */
export const sendMessageWithAppendix = (
  data: SendMessageWithAppendixRequestBody,
  options?: HttpOptions
): Promise<SendMessageWithAppendixResponseBody> =>
  /**! @contract easyops.api.msgsender.custom_sender.SendMessageWithAppendix */ http.post<SendMessageWithAppendixResponseBody>(
    "api/gateway/msgsender.custom_sender.SendMessageWithAppendix/api/v1/message_sender/mail_with_appendix",
    data,
    options
  );

export interface ModelSendMessageWithAppendixRequest_partial {
  /** 发送通知的请求数据 */
  data: ModelSendMessageWithAppendixRequest["data"];

  /** 附件的二进制数据 */
  files: File;
}

export interface SendMessageWithAppendixResponseBody_2 {
  /** 请求结果数据 e.g.: {"email": ["test@qq.com"], "phone": ["test@qq.com"]} */
  data?: Record<string, any>;
}
