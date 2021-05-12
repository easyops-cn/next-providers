import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_CheckLoginResponseBody {
  /** 是否已经登录 */
  loggedIn?: boolean;

  /** 用户名 */
  username?: string;

  /** 客户id */
  org?: number;

  /** 用户地理位置 */
  location?: string;

  /** 用户 id */
  userInstanceId?: string;

  /** 用户来源 */
  loginFrom?: string;
}

/**
 * @description 判断用户是否登录
 * @endpoint GET /api/auth/login
 */
export const AuthApi_checkLogin = async (
  options?: HttpOptions
): Promise<AuthApi_CheckLoginResponseBody> =>
  /**! @contract easyops.api.api_gateway.auth.CheckLogin */ (
    await http.get<ResponseBodyWrapper<AuthApi_CheckLoginResponseBody>>(
      "api/auth/login",
      options
    )
  ).data;
