import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

/** 要更新的实例 */
export type ConfigApi_UpdateConfigV2RequestBody = Partial<ModelMessageConfig>;

export type ConfigApi_UpdateConfigV2ResponseBody =
  Partial<ModelEasyTornadoCommonResponse> &
    ConfigApi_UpdateConfigV2ResponseBody_2;

/**
 * @description 更新通知配置
 * @endpoint PUT /api/v2/message_sender/configs/:instanceId
 */
export const ConfigApi_updateConfigV2 = (
  instanceId: string | number,
  data: ConfigApi_UpdateConfigV2RequestBody,
  options?: HttpOptions
): Promise<ConfigApi_UpdateConfigV2ResponseBody> =>
  /**! @contract easyops.api.msgsender.config.UpdateConfigV2@1.0.0 */ http.put<ConfigApi_UpdateConfigV2ResponseBody>(
    `api/gateway/logic.msgsender/api/v2/message_sender/configs/${instanceId}`,
    data,
    options
  );

export interface ConfigApi_UpdateConfigV2ResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
