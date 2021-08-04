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
