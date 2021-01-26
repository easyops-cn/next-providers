import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetUserLoginInfoRequestParams {
  /** 登录的key字符串, 例如SSO登录时候的工号的key */
  login_key: string;

  /** 登录的值, 例如SSO登录时候的工号的值 */
  login_value: string;
}

export interface GetUserLoginInfoResponseBody {
  /** 用户name */
  name: string;

  /** org */
  org: number;
}

/**
 * @description 查询用户登录信息
 * @endpoint GET /api/v1/user/login_info
 */
export const getUserLoginInfo = async (
  params: GetUserLoginInfoRequestParams,
  options?: HttpOptions
): Promise<GetUserLoginInfoResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetUserLoginInfoResponseBody>>(
      "api/gateway/user_service.user_admin.GetUserLoginInfo/api/v1/user/login_info",
      { ...options, params }
    )
  ).data;
