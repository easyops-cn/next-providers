import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelSendMessageRequest } from "../../../model/msgsender";

export type CustomSenderApi_SendMessageRequestBody =
  Partial<ModelSendMessageRequest>;

export type CustomSenderApi_SendMessageResponseBody =
  Partial<ModelEasyTornadoCommonResponse> &
    CustomSenderApi_SendMessageResponseBody_2;

/**
 * @description 发送通知消息
 * @endpoint post /api/v1/message_sender/send_message
 */
export const CustomSenderApi_sendMessage = (
  data: CustomSenderApi_SendMessageRequestBody,
  options?: HttpOptions
): Promise<CustomSenderApi_SendMessageResponseBody> =>
  /**! @contract easyops.api.msgsender.custom_sender.SendMessage@1.0.0 */ http.post<CustomSenderApi_SendMessageResponseBody>(
    "api/gateway/msgsender.custom_sender.SendMessage/api/v1/message_sender/send_message",
    data,
    options
  );

export interface CustomSenderApi_SendMessageResponseBody_2 {
  /** 请求结果数据 e.g.: {"email": ["test@qq.com"], "phone": ["test@qq.com"]} */
  data?: Record<string, any>;
}
