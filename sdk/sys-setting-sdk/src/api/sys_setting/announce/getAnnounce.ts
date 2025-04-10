import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSysAnnounce } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AnnounceApi_GetAnnounceRequestParams {
  /** 自动忽略, 用于前台使用时, 查看详情后自动忽略当前公告 */
  autoIgnore?: boolean;
}

export type AnnounceApi_GetAnnounceResponseBody = Partial<ModelSysAnnounce> &
  AnnounceApi_GetAnnounceResponseBody_2;

/**
 * @description 获取通知公告详情
 * @endpoint GET /api/sys_setting/v1/announce/detail/:instanceId
 */
export const AnnounceApi_getAnnounce = async (
  instanceId: string | number,
  params: AnnounceApi_GetAnnounceRequestParams,
  options?: HttpOptions
): Promise<AnnounceApi_GetAnnounceResponseBody> =>
  /**! @contract easyops.api.sys_setting.announce.GetAnnounce@1.0.1 */ (
    await http.get<ResponseBodyWrapper<AnnounceApi_GetAnnounceResponseBody>>(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/announce/detail/${instanceId}`,
      { ...options, params }
    )
  ).data;

export interface AnnounceApi_GetAnnounceResponseBody_2 {
  /** 用户信息 */
  userInfo?: AnnounceApi_GetAnnounceResponseBody_userInfo;
}

export interface AnnounceApi_GetAnnounceResponseBody_userInfo {
  /** 用户名称 */
  username?: string;

  /** 用户昵称 */
  nickname?: string;

  /** 是否是管理员 */
  isAdmin?: boolean;
}
