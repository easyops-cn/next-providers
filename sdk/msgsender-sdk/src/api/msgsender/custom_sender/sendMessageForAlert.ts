import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelSendMessageForAlertRequest } from "../../../model/msgsender";

export type SendMessageForAlertRequestBody = Partial<ModelSendMessageForAlertRequest> &
  ModelSendMessageForAlertRequest_partial;

export type SendMessageForAlertResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  SendMessageForAlertResponseBody_2;

/**
 * @description 处理告警通知消息
 * @endpoint post /api/v1/alert_adapter/receive
 */
export const sendMessageForAlert = (
  data: SendMessageForAlertRequestBody,
  options?: HttpOptions
): Promise<SendMessageForAlertResponseBody> =>
  http.post<SendMessageForAlertResponseBody>(
    "api/gateway/msgsender.custom_sender.SendMessageForAlert/api/v1/alert_adapter/receive",
    data,
    options
  );

export interface ModelSendMessageForAlertRequest_partial {
  /** 告警数据 */
  data: Record<string, any>;
}

export interface SendMessageForAlertResponseBody_2 {
  /** 请求结果数据 e.g.: {"email": ["test@qq.com"], "phone": ["test@qq.com"]} */
  data?: Record<string, any>;
}
