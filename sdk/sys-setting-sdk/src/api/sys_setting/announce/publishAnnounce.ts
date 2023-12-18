import { http, HttpOptions } from "@next-core/brick-http";

export interface AnnounceApi_PublishAnnounceRequestBody {
  /** 公告id列表 */
  instanceIds: string[];

  /** 是否已发布 */
  isPublish: boolean;
}

/**
 * @description 批量发布(下线)公告
 * @endpoint POST /api/sys_setting/v1/announce/publish
 */
export const AnnounceApi_publishAnnounce = (
  data: AnnounceApi_PublishAnnounceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.announce.PublishAnnounce@1.0.1 */ http.post<void>(
    "api/gateway/sys_setting.announce.PublishAnnounce/api/sys_setting/v1/announce/publish",
    data,
    options
  );
