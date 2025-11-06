import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelMessageConfig,
  ModelMessageReceiver,
} from "../../../model/msgsender";

export type CustomSenderApi_SendMessageDebugRequestBody =
  Partial<ModelMessageConfig> &
    ModelMessageConfig_partial_3 &
    CustomSenderApi_SendMessageDebugRequestBody_2;

/**
 * @description 发送通知消息调试
 * @endpoint post /api/v1/message_sender/send_message_debug
 */
export const CustomSenderApi_sendMessageDebug = (
  data: CustomSenderApi_SendMessageDebugRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.msgsender.custom_sender.SendMessageDebug@1.0.0 */ http.post<void>(
    "api/gateway/logic.msgsender/api/v1/message_sender/send_message_debug",
    data,
    options
  );

export interface ModelMessageConfig_partial_3 {
  /** 通知类型, 分别对应邮箱，企业微信，钉钉，钉钉机器人，自定义类型 */
  msgType: "email" | "wework" | "dingding" | "dingding_robot" | "custom";
}

export interface CustomSenderApi_SendMessageDebugRequestBody_2 {
  /** 消息接收者 */
  receivers: Partial<ModelMessageReceiver>[];
}
