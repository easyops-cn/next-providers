import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthRequestBody {
  /** 用户名 */
  login_id: string;

  /** 密码 */
  password: string;

  /** ladp服务器名称 */
  ldapServer?: string;
}

export interface AuthResponseBody {
  /** 用户名 */
  username: string;

  /** 用户名,和username一致(兼容以前返回) */
  name: string;

  /** 用户instanceId */
  instanceId?: string;

  /** org */
  org: number;
}

/**
 * @description LDAP认证
 * @endpoint POST /api/v1/users/ldap_auth
 */
export const auth = async (
  data: AuthRequestBody,
  options?: HttpOptions
): Promise<AuthResponseBody> =>
  /**! @contract easyops.api.user_service.ldap.Auth */ (
    await http.post<ResponseBodyWrapper<AuthResponseBody>>(
      "api/gateway/user_service.ldap.Auth/api/v1/users/ldap_auth",
      data,
      options
    )
  ).data;
