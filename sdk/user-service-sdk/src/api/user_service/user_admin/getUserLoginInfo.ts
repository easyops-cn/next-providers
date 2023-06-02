import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_GetUserLoginInfoRequestParams {
  /** 登录的key字符串, 例如SSO登录时候的工号的key */
  login_key: string;

  /** 登录的值, 例如SSO登录时候的工号的值 */
  login_value: string;
}

export interface UserAdminApi_GetUserLoginInfoResponseBody {
  /** 用户name */
  name: string;

  /** org */
  org: number;
}

/**
 * @description 查询用户登录信息
 * @endpoint GET /api/v1/user/login_info
 */
export const UserAdminApi_getUserLoginInfo = async (
  params: UserAdminApi_GetUserLoginInfoRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_GetUserLoginInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserLoginInfo@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<UserAdminApi_GetUserLoginInfoResponseBody>
    >(
      "api/gateway/user_service.user_admin.GetUserLoginInfo/api/v1/user/login_info",
      { ...options, params }
    )
  ).data;
