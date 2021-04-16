import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

export interface ConfigApi_ListConfigRequestParams {
  /** 页码 */
  page: number;

  /** 每页大小 */
  page_size: number;
}

export type ConfigApi_ListConfigResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  ConfigApi_ListConfigResponseBody_2;

/**
 * @description 获取通知配置列表
 * @endpoint GET /api/v1/message_sender/configs
 */
export const ConfigApi_listConfig = (
  params: ConfigApi_ListConfigRequestParams,
  options?: HttpOptions
): Promise<ConfigApi_ListConfigResponseBody> =>
  /**! @contract easyops.api.msgsender.config.ListConfig */ http.get<ConfigApi_ListConfigResponseBody>(
    "api/gateway/msgsender.config.ListConfig/api/v1/message_sender/configs",
    { ...options, params }
  );

export interface ConfigApi_ListConfigResponseBody_2 {
  /** 通知配置 */
  data?: ConfigApi_ListConfigResponseBody_data;
}

export interface ConfigApi_ListConfigResponseBody_data {
  /** 配置列表 */
  list?: Partial<ModelMessageConfig>[];

  /** 总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}
