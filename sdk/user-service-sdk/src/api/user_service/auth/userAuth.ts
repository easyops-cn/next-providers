import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_UserAuthRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password: string;

  /** 验证码 */
  phrase?: string;
}

export interface AuthApi_UserAuthResponseBody {
  /** 用户名 */
  name: string;

  /** 用户instanceId */
  instanceId?: string;

  /** org */
  org: number;
}

/**
 * @description 登录认证[内部]
 * @endpoint POST /api/v1/users/auth
 */
export const AuthApi_userAuth = async (
  data: AuthApi_UserAuthRequestBody,
  options?: HttpOptions
): Promise<AuthApi_UserAuthResponseBody> =>
  /**! @contract easyops.api.user_service.auth.UserAuth */ (
    await http.post<ResponseBodyWrapper<AuthApi_UserAuthResponseBody>>(
      "api/gateway/user_service.auth.UserAuth/api/v1/users/auth",
      data,
      options
    )
  ).data;
