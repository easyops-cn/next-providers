import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

export type CreateConfigRequestBody = Partial<ModelMessageConfig> &
  ModelMessageConfig_partial;

export type CreateConfigResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  CreateConfigResponseBody_2;

/**
 * @description 创建通知配置
 * @endpoint POST /api/v1/message_sender/configs
 */
export const createConfig = (
  data: CreateConfigRequestBody,
  options?: HttpOptions
): Promise<CreateConfigResponseBody> =>
  http.post<CreateConfigResponseBody>(
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

export interface CreateConfigResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
