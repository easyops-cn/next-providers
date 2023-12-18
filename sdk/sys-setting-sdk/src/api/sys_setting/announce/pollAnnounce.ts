import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSysAnnounce } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export type AnnounceApi_PollAnnounceResponseBody = Partial<ModelSysAnnounce>;

/**
 * @description 获取实时公告，长链接
 * @endpoint GET /api/sys_setting/v1/announce/poll
 */
export const AnnounceApi_pollAnnounce = async (
  options?: HttpOptions
): Promise<AnnounceApi_PollAnnounceResponseBody> =>
  /**! @contract easyops.api.sys_setting.announce.PollAnnounce@1.0.0 */ (
    await http.get<ResponseBodyWrapper<AnnounceApi_PollAnnounceResponseBody>>(
      "api/gateway/sys_setting.announce.PollAnnounce/api/sys_setting/v1/announce/poll",
      options
    )
  ).data;
