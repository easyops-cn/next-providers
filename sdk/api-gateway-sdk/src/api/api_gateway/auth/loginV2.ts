import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_LoginV2RequestBody {
  /** 用户名 */
  username: string;

  /** 客户id */
  password: string;

  /** 验证码 */
  phrase?: string;

  /** 校验密码的方式 easyops: 校验 easyops 的账号密码 custom:  通过客户自定义方式校验, 这种方式需要在 sso-adapter 实现和客户对接的逻辑 ldap:    通过 ldap 校验密码 */
  loginBy?: string;
}

export interface AuthApi_LoginV2ResponseBody {
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

  /** 访问规则(例如按照平台区分 cmdb,ops) */
  accessRule?: string;

  /** 判断当前登录用户是否是系统管理员 */
  isAdmin?: boolean;

  /** csrf_token，开启了csrf特性才返回值 */
  csrfToken?: string;

  /** 是否需要修改密码（开启 check-password-security 特性时, 初次登录和密码过期时需要修改密码） */
  changePasswordRequired?: boolean;

  /** 修改密码的具体原因（firstLogin:初次登录, expired:密码已过期） */
  changePasswordReason?: "firstLogin" | "expired";

  /** 密码有效期剩余时间（当 changePasswordRequired 为 true 时，这个值为 -1） */
  passwordRemainingDays?: number;
}

/**
 * @description 根据指定方式校验密码登录
 * @endpoint POST /api/auth/login/v2
 */
export const AuthApi_loginV2 = async (
  data: AuthApi_LoginV2RequestBody,
  options?: HttpOptions
): Promise<AuthApi_LoginV2ResponseBody> =>
  /**! @contract easyops.api.api_gateway.auth.LoginV2@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AuthApi_LoginV2ResponseBody>>(
      "api/auth/login/v2",
      data,
      options
    )
  ).data;
