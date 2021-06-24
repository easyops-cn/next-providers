import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

/** 要更新的实例 */
export type ConfigApi_UpdateConfigRequestBody = Partial<ModelMessageConfig>;

export type ConfigApi_UpdateConfigResponseBody =
  Partial<ModelEasyTornadoCommonResponse> &
    ConfigApi_UpdateConfigResponseBody_2;

/**
 * @description 更新通知配置
 * @endpoint PUT /api/v1/message_sender/configs/:instanceId
 */
export const ConfigApi_updateConfig = (
  instanceId: string | number,
  data: ConfigApi_UpdateConfigRequestBody,
  options?: HttpOptions
): Promise<ConfigApi_UpdateConfigResponseBody> =>
  /**! @contract easyops.api.msgsender.config.UpdateConfig */ http.put<ConfigApi_UpdateConfigResponseBody>(
    `api/gateway/msgsender.config.UpdateConfig/api/v1/message_sender/configs/${instanceId}`,
    data,
    options
  );

export interface ConfigApi_UpdateConfigResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
