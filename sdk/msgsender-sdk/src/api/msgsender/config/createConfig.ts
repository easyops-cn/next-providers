import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

export type ConfigApi_CreateConfigRequestBody = Partial<ModelMessageConfig> &
  ModelMessageConfig_partial;

export type ConfigApi_CreateConfigResponseBody =
  Partial<ModelEasyTornadoCommonResponse> &
    ConfigApi_CreateConfigResponseBody_2;

/**
 * @description 创建通知配置
 * @endpoint POST /api/v1/message_sender/configs
 */
export const ConfigApi_createConfig = (
  data: ConfigApi_CreateConfigRequestBody,
  options?: HttpOptions
): Promise<ConfigApi_CreateConfigResponseBody> =>
  /**! @contract easyops.api.msgsender.config.CreateConfig@1.0.0 */ http.post<ConfigApi_CreateConfigResponseBody>(
    "api/gateway/msgsender.config.CreateConfig/api/v1/message_sender/configs",
    data,
    options
  );

export interface ModelMessageConfig_partial {
  /** 名称 */
  name: string;

  /** 插件对应cmdb用户的字段名称 */
  cmdbUserObjectColName: string;

  /** 插件脚本的实际名称 */
  pluginName: string;
}

export interface ConfigApi_CreateConfigResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
