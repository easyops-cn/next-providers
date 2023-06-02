import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelSendMessageWithAppendixRequest } from "../../../model/msgsender";

export type CustomSenderApi_SendMessageWithAppendixRequestBody =
  Partial<ModelSendMessageWithAppendixRequest> &
    ModelSendMessageWithAppendixRequest_partial;

export type CustomSenderApi_SendMessageWithAppendixResponseBody =
  Partial<ModelEasyTornadoCommonResponse> &
    CustomSenderApi_SendMessageWithAppendixResponseBody_2;

/**
 * @description 处理带附件的通知消息
 * @endpoint post /api/v1/message_sender/mail_with_appendix
 */
export const CustomSenderApi_sendMessageWithAppendix = (
  data: CustomSenderApi_SendMessageWithAppendixRequestBody,
  options?: HttpOptions
): Promise<CustomSenderApi_SendMessageWithAppendixResponseBody> => {
  /**! @contract easyops.api.msgsender.custom_sender.SendMessageWithAppendix@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return http.post<CustomSenderApi_SendMessageWithAppendixResponseBody>(
    "api/gateway/msgsender.custom_sender.SendMessageWithAppendix/api/v1/message_sender/mail_with_appendix",
    _formData,
    options
  );
};

export interface ModelSendMessageWithAppendixRequest_partial {
  /** 发送通知的请求数据 */
  data: ModelSendMessageWithAppendixRequest["data"];

  /** 附件的二进制数据 */
  files: File;
}

export interface CustomSenderApi_SendMessageWithAppendixResponseBody_2 {
  /** 请求结果数据 e.g.: {"email": ["test@qq.com"], "phone": ["test@qq.com"]} */
  data?: Record<string, any>;
}
