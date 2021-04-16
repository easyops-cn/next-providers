import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelSendMessageForAlertRequest } from "../../../model/msgsender";

export type CustomSenderApi_SendMessageForAlertRequestBody = Partial<ModelSendMessageForAlertRequest> &
  ModelSendMessageForAlertRequest_partial;

export type CustomSenderApi_SendMessageForAlertResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  CustomSenderApi_SendMessageForAlertResponseBody_2;

/**
 * @description 处理告警通知消息
 * @endpoint post /api/v1/alert_adapter/receive
 */
export const CustomSenderApi_sendMessageForAlert = (
  data: CustomSenderApi_SendMessageForAlertRequestBody,
  options?: HttpOptions
): Promise<CustomSenderApi_SendMessageForAlertResponseBody> =>
  /**! @contract easyops.api.msgsender.custom_sender.SendMessageForAlert */ http.post<CustomSenderApi_SendMessageForAlertResponseBody>(
    "api/gateway/msgsender.custom_sender.SendMessageForAlert/api/v1/alert_adapter/receive",
    data,
    options
  );

export interface ModelSendMessageForAlertRequest_partial {
  /** 告警数据 */
  data: Record<string, any>;
}

export interface CustomSenderApi_SendMessageForAlertResponseBody_2 {
  /** 请求结果数据 e.g.: {"email": ["test@qq.com"], "phone": ["test@qq.com"]} */
  data?: Record<string, any>;
}
