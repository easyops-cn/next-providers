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

  /** 用户姓名 */
  nickname?: string;
}

export interface AuthApi_RegisterResponseBody {
  /** 用户名 */
  name?: string;

  /** 邮箱 */
  email?: string;

  /** org */
  org?: number;

  /** 是否已经登录 */
  loggedIn?: boolean;

  /** 用户名 */
  username?: string;

  /** 用户地理位置 */
  location?: string;

  /** 用户 id */
  userInstanceId?: string;

  /** 用户来源 */
  loginFrom?: string;

  /** 访问规则(例如按照平台区分 cmdb,ops) */
  accessRule?: string;

  /** 判断当前登录用户是否是系统管理员 */
  isAdmin?: boolean;

  /** 用户姓名 */
  nickname?: string;
}

/**
 * @description 注册
 * @endpoint POST /api/auth/register
 */
export const AuthApi_register = async (
  data: AuthApi_RegisterRequestBody,
  options?: HttpOptions
): Promise<AuthApi_RegisterResponseBody> =>
  /**! @contract easyops.api.api_gateway.auth.Register@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AuthApi_RegisterResponseBody>>(
      "api/auth/register",
      data,
      options
    )
  ).data;
