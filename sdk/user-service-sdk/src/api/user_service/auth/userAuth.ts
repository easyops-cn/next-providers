import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_UserAuthRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password: string;

  /** 验证码 */
  phrase?: string;

  /** 校验密码的方式 easyops: 默认账号密码的方式 custom: 通过客户自定义方式校验, 这种方式需要在 sso-adapter 实现和客户对接的逻辑 ldap: 通过 ldap 登录 */
  loginBy?: string;

  /** 客户端 ip, 某些客户需要此字段 */
  clientIp?: string;
}

export interface AuthApi_UserAuthResponseBody {
  /** 用户名 */
  name: string;

  /** 用户instanceId */
  instanceId?: string;

  /** org */
  org: number;

  /** 是否需要修改密码（开启 check-password-security 特性时, 初次登录和密码过期时需要修改密码） */
  changePasswordRequired?: boolean;

  /** 修改密码的具体原因（firstLogin:初次登录, expired:密码已过期） */
  changePasswordReason?: "firstLogin" | "expired";

  /** 密码有效期剩余时间（当 changePasswordRequired 为 true 时，这个值为 -1） */
  passwordRemainingDays?: number;
}

/**
 * @description 登录认证[内部]
 * @endpoint POST /api/v1/users/auth
 */
export const AuthApi_userAuth = async (
  data: AuthApi_UserAuthRequestBody,
  options?: HttpOptions
): Promise<AuthApi_UserAuthResponseBody> =>
  /**! @contract easyops.api.user_service.auth.UserAuth@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AuthApi_UserAuthResponseBody>>(
      "api/gateway/logic.user_service/api/v1/users/auth",
      data,
      options
    )
  ).data;
