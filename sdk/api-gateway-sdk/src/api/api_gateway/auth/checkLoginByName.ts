import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_CheckLoginByNameRequestBody {
  /** 用户名 */
  username?: string;

  /** 客户id */
  org?: number;
}

export interface AuthApi_CheckLoginByNameResponseBody {
  /** 是否已经登录 */
  loggedIn?: boolean;

  /** 用户名 */
  username?: string;

  /** 客户id */
  org?: number;

  /** 登录Session */
  loginSession?: string;
}

/**
 * @description 判断用户是否登录
 * @endpoint POST /api/auth/user/check/login
 */
export const AuthApi_checkLoginByName = async (
  data: AuthApi_CheckLoginByNameRequestBody,
  options?: HttpOptions
): Promise<AuthApi_CheckLoginByNameResponseBody> =>
  /**! @contract easyops.api.api_gateway.auth.CheckLoginByName@1.2.0 */ (
    await http.post<ResponseBodyWrapper<AuthApi_CheckLoginByNameResponseBody>>(
      "api/auth/user/check/login",
      data,
      options
    )
  ).data;
