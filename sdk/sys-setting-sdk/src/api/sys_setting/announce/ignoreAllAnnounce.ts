import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 忽略所有公告
 * @endpoint POST /api/sys_setting/v1/announce/ignore_all
 */
export const AnnounceApi_ignoreAllAnnounce = (
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.announce.IgnoreAllAnnounce@1.0.1 */ http.post<void>(
    "api/gateway/sys_setting.announce.IgnoreAllAnnounce/api/sys_setting/v1/announce/ignore_all",
    undefined,
    options
  );
