import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

export type ConfigApi_CreateConfigV2RequestBody = Partial<ModelMessageConfig> &
  ModelMessageConfig_partial_2;

export type ConfigApi_CreateConfigV2ResponseBody =
  Partial<ModelEasyTornadoCommonResponse> &
    ConfigApi_CreateConfigV2ResponseBody_2;

/**
 * @description 创建通知配置
 * @endpoint POST /api/v2/message_sender/configs
 */
export const ConfigApi_createConfigV2 = (
  data: ConfigApi_CreateConfigV2RequestBody,
  options?: HttpOptions
): Promise<ConfigApi_CreateConfigV2ResponseBody> =>
  /**! @contract easyops.api.msgsender.config.CreateConfigV2@1.0.0 */ http.post<ConfigApi_CreateConfigV2ResponseBody>(
    "api/gateway/logic.msgsender/api/v2/message_sender/configs",
    data,
    options
  );

export interface ModelMessageConfig_partial_2 {
  /** 名称 */
  name: string;

  /** 插件对应cmdb用户的字段名称 */
  cmdbUserObjectColName: string;

  /** 插件脚本的实际名称 */
  pluginName: string;
}

export interface ConfigApi_CreateConfigV2ResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
