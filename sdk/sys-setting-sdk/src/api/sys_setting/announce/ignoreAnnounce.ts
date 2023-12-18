import { http, HttpOptions } from "@next-core/brick-http";

export interface AnnounceApi_IgnoreAnnounceRequestBody {
  /** 公告id列表 */
  instanceIds: string[];
}

/**
 * @description 批量忽略公告
 * @endpoint POST /api/sys_setting/v1/announce/ignore
 */
export const AnnounceApi_ignoreAnnounce = (
  data: AnnounceApi_IgnoreAnnounceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.announce.IgnoreAnnounce@1.0.1 */ http.post<void>(
    "api/gateway/sys_setting.announce.IgnoreAnnounce/api/sys_setting/v1/announce/ignore",
    data,
    options
  );
