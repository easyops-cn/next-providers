import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonPageResponse } from "../../../model/monitor";

export type ListSupportInformResponseBody = Partial<ModelEasyTornadoCommonPageResponse> &
  ListSupportInformResponseBody_2;

/**
 * @description 获取消息通道目前支持的通知方式
 * @endpoint get /api/v1/message_sender/method
 */
export const listSupportInform = (
  options?: HttpOptions
): Promise<ListSupportInformResponseBody> =>
  /**! @contract easyops.api.msgsender.custom_sender.ListSupportInform */ http.get<ListSupportInformResponseBody>(
    "api/gateway/msgsender.custom_sender.ListSupportInform/api/v1/message_sender/method",
    options
  );

export interface ListSupportInformResponseBody_2 {
  /** 数据内容 */
  data?: ListSupportInformResponseBody_data_item[];
}

export interface ListSupportInformResponseBody_data_item {
  /** 关联的cmdb用户对象字段 */
  col_of_cmdb_user_object?: string;

  /** 是否启用 */
  enable?: boolean;

  /** 通知插件名称 */
  plugin_name?: string;

  /** 通知方式描述 */
  description?: string;

  /** 通知方式名称 */
  inform_type?: string;
}
