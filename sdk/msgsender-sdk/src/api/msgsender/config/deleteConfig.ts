import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";

export type ConfigApi_DeleteConfigResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  ConfigApi_DeleteConfigResponseBody_2;

/**
 * @description 删除通知配置
 * @endpoint DELETE /api/v1/message_sender/configs/:instanceId
 */
export const ConfigApi_deleteConfig = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ConfigApi_DeleteConfigResponseBody> =>
  /**! @contract easyops.api.msgsender.config.DeleteConfig */ http.delete<ConfigApi_DeleteConfigResponseBody>(
    `api/gateway/msgsender.config.DeleteConfig/api/v1/message_sender/configs/${instanceId}`,
    options
  );

export interface ConfigApi_DeleteConfigResponseBody_2 {
  /** data */
  data?: Record<string, any>;
}
