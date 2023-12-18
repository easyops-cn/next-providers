import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSiteMessageView } from "../../../model/sys_setting";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface SiteMsgApi_ListSiteMessageRequestParams {
  /** 是否已读 */
  isRead?: boolean;

  /** 标题模糊搜索 */
  titleLike?: string;

  /** 分类模板搜索 */
  msgTypeLike?: string;

  /** 页 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export type SiteMsgApi_ListSiteMessageResponseItem =
  Partial<ModelSiteMessageView>;

export type SiteMsgApi_ListSiteMessageResponseBody =
  ResponseListWrapper<SiteMsgApi_ListSiteMessageResponseItem>;

/**
 * @description 获取当前用户的站内信
 * @endpoint LIST /api/sys_setting/v1/site_msg
 */
export const SiteMsgApi_listSiteMessage = async (
  params: SiteMsgApi_ListSiteMessageRequestParams,
  options?: HttpOptions
): Promise<SiteMsgApi_ListSiteMessageResponseBody> =>
  /**! @contract easyops.api.sys_setting.site_msg.ListSiteMessage@1.0.0 */ (
    await http.get<ResponseBodyWrapper<SiteMsgApi_ListSiteMessageResponseBody>>(
      "api/gateway/sys_setting.site_msg.ListSiteMessage/api/sys_setting/v1/site_msg",
      { ...options, params }
    )
  ).data;
