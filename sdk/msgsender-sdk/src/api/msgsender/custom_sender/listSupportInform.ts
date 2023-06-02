import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonPageResponse } from "../../../model/monitor";

export type CustomSenderApi_ListSupportInformResponseBody =
  Partial<ModelEasyTornadoCommonPageResponse> &
    CustomSenderApi_ListSupportInformResponseBody_2;

/**
 * @description 获取消息通道目前支持的通知方式
 * @endpoint get /api/v1/message_sender/method
 */
export const CustomSenderApi_listSupportInform = (
  options?: HttpOptions
): Promise<CustomSenderApi_ListSupportInformResponseBody> =>
  /**! @contract easyops.api.msgsender.custom_sender.ListSupportInform@1.0.0 */ http.get<CustomSenderApi_ListSupportInformResponseBody>(
    "api/gateway/msgsender.custom_sender.ListSupportInform/api/v1/message_sender/method",
    options
  );

export interface CustomSenderApi_ListSupportInformResponseBody_2 {
  /** 数据内容 */
  data?: CustomSenderApi_ListSupportInformResponseBody_data_item[];
}

export interface CustomSenderApi_ListSupportInformResponseBody_data_item {
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
