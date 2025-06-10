import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface LdapApi_AuthRequestBody {
  /** 用户名 */
  login_id: string;

  /** 密码 */
  password: string;

  /** ladp服务器名称 */
  ldapServer?: string;
}

export interface LdapApi_AuthResponseBody {
  /** 用户名 */
  username: string;

  /** 用户名,和username一致(兼容以前返回) */
  name: string;

  /** 用户instanceId */
  instanceId?: string;

  /** org */
  org: number;

  /** 是否为管理员 */
  isAdmin?: boolean;
}

/**
 * @description LDAP认证
 * @endpoint POST /api/v1/users/ldap_auth
 */
export const LdapApi_auth = async (
  data: LdapApi_AuthRequestBody,
  options?: HttpOptions
): Promise<LdapApi_AuthResponseBody> =>
  /**! @contract easyops.api.user_service.ldap.Auth@1.0.1 */ (
    await http.post<ResponseBodyWrapper<LdapApi_AuthResponseBody>>(
      "api/gateway/logic.user_service/api/v1/users/ldap_auth",
      data,
      options
    )
  ).data;
