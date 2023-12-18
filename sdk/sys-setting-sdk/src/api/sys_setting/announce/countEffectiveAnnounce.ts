import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AnnounceApi_CountEffectiveAnnounceResponseBody {
  /** 当前用户的有效公告数量 */
  count?: number;
}

/**
 * @description 获取当前用户有效公告数量
 * @endpoint GET /api/sys_setting/v1/announce/count
 */
export const AnnounceApi_countEffectiveAnnounce = async (
  options?: HttpOptions
): Promise<AnnounceApi_CountEffectiveAnnounceResponseBody> =>
  /**! @contract easyops.api.sys_setting.announce.CountEffectiveAnnounce@1.0.1 */ (
    await http.get<
      ResponseBodyWrapper<AnnounceApi_CountEffectiveAnnounceResponseBody>
    >(
      "api/gateway/sys_setting.announce.CountEffectiveAnnounce/api/sys_setting/v1/announce/count",
      options
    )
  ).data;
