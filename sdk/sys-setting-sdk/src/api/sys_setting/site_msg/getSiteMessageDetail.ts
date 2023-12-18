import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSiteMessageView } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export type SiteMsgApi_GetSiteMessageDetailResponseBody =
  Partial<ModelSiteMessageView>;

/**
 * @description 获取当前用户的站内信
 * @endpoint GET /api/sys_setting/v1/site_msg/:msgId
 */
export const SiteMsgApi_getSiteMessageDetail = async (
  msgId: string | number,
  options?: HttpOptions
): Promise<SiteMsgApi_GetSiteMessageDetailResponseBody> =>
  /**! @contract easyops.api.sys_setting.site_msg.GetSiteMessageDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<SiteMsgApi_GetSiteMessageDetailResponseBody>
    >(
      `api/gateway/sys_setting.site_msg.GetSiteMessageDetail/api/sys_setting/v1/site_msg/${msgId}`,
      options
    )
  ).data;
