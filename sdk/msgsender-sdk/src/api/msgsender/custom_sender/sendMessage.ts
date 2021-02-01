import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelSendMessageRequest } from "../../../model/msgsender";

export type SendMessageRequestBody = Partial<ModelSendMessageRequest>;

export type SendMessageResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  SendMessageResponseBody_2;

/**
 * @description 发送通知消息
 * @endpoint post /api/v1/message_sender/send_message
 */
export const sendMessage = (
  data: SendMessageRequestBody,
  options?: HttpOptions
): Promise<SendMessageResponseBody> =>
  http.post<SendMessageResponseBody>(
    "api/gateway/msgsender.custom_sender.SendMessage/api/v1/message_sender/send_message",
    data,
    options
  );

export interface SendMessageResponseBody_2 {
  /** 请求结果数据 e.g.: {"email": ["test@qq.com"], "phone": ["test@qq.com"]} */
  data?: Record<string, any>;
}
