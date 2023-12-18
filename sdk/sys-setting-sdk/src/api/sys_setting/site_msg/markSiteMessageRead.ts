import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 标记消息已读
 * @endpoint PUT /api/sys_setting/v1/site_msg/:msgId
 */
export const SiteMsgApi_markSiteMessageRead = (
  msgId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.site_msg.MarkSiteMessageRead@1.0.0 */ http.put<void>(
    `api/gateway/sys_setting.site_msg.MarkSiteMessageRead/api/sys_setting/v1/site_msg/${msgId}`,
    undefined,
    options
  );
