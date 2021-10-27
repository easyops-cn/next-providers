import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_RegisterRequestBody {
  /** 用户名 */
  name?: string;

  /** 密码 */
  password?: string;

  /** 邮箱 */
  email?: string;

  /** 邀请码 */
  invite?: string;
}

export interface AuthApi_RegisterResponseBody {
  /** 用户名 */
  name?: string;

  /** 邮箱 */
  email?: string;

  /** org */
  org?: number;
}

/**
 * @description 注册
 * @endpoint POST /api/auth/register
 */
export const AuthApi_register = async (
  data: AuthApi_RegisterRequestBody,
  options?: HttpOptions
): Promise<AuthApi_RegisterResponseBody> =>
  /**! @contract easyops.api.api_gateway.auth.Register */ (
    await http.post<ResponseBodyWrapper<AuthApi_RegisterResponseBody>>(
      "api/auth/register",
      data,
      options
    )
  ).data;
