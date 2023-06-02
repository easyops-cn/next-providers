import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

export type ConfigApi_GetConfigResponseBody =
  Partial<ModelEasyTornadoCommonResponse> & ConfigApi_GetConfigResponseBody_2;

/**
 * @description 获取通知配置
 * @endpoint GET /api/v1/message_sender/configs/:instanceId
 */
export const ConfigApi_getConfig = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ConfigApi_GetConfigResponseBody> =>
  /**! @contract easyops.api.msgsender.config.GetConfig@1.0.0 */ http.get<ConfigApi_GetConfigResponseBody>(
    `api/gateway/msgsender.config.GetConfig/api/v1/message_sender/configs/${instanceId}`,
    options
  );

export interface ConfigApi_GetConfigResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
