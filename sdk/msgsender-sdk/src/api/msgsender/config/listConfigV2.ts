import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

export interface ConfigApi_ListConfigV2RequestParams {
  /** 页码 */
  page: number;

  /** 每页大小 */
  page_size: number;
}

export type ConfigApi_ListConfigV2ResponseBody =
  Partial<ModelEasyTornadoCommonResponse> &
    ConfigApi_ListConfigV2ResponseBody_2;

/**
 * @description 获取通知配置列表
 * @endpoint GET /api/v2/message_sender/configs
 */
export const ConfigApi_listConfigV2 = (
  params: ConfigApi_ListConfigV2RequestParams,
  options?: HttpOptions
): Promise<ConfigApi_ListConfigV2ResponseBody> =>
  /**! @contract easyops.api.msgsender.config.ListConfigV2@1.0.0 */ http.get<ConfigApi_ListConfigV2ResponseBody>(
    "api/gateway/logic.msgsender/api/v2/message_sender/configs",
    { ...options, params }
  );

export interface ConfigApi_ListConfigV2ResponseBody_2 {
  /** 通知配置 */
  data?: ConfigApi_ListConfigV2ResponseBody_data;
}

export interface ConfigApi_ListConfigV2ResponseBody_data {
  /** 配置列表 */
  list?: Partial<ModelMessageConfig>[];

  /** 总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}
