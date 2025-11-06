import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelMessageConfig,
  ModelMessageReceiver,
} from "../../../model/msgsender";

export type CustomSenderApi_SendMessageDebugV2RequestBody =
  Partial<ModelMessageConfig> &
    ModelMessageConfig_partial_4 &
    CustomSenderApi_SendMessageDebugV2RequestBody_2;

/**
 * @description 发送通知消息调试
 * @endpoint post /api/v2/message_sender/send_message_debug
 */
export const CustomSenderApi_sendMessageDebugV2 = (
  data: CustomSenderApi_SendMessageDebugV2RequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.msgsender.custom_sender.SendMessageDebugV2@1.0.0 */ http.post<void>(
    "api/gateway/logic.msgsender/api/v2/message_sender/send_message_debug",
    data,
    options
  );

export interface ModelMessageConfig_partial_4 {
  /** 通知类型, 分别对应邮箱，企业微信，钉钉，钉钉机器人，自定义类型 */
  msgType: "email" | "wework" | "dingding" | "dingding_robot" | "custom";
}

export interface CustomSenderApi_SendMessageDebugV2RequestBody_2 {
  /** 消息接收者 */
  receivers: Partial<ModelMessageReceiver>[];
}
