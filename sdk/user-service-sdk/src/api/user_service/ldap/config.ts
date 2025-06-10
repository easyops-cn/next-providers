import { http, HttpOptions } from "@next-core/brick-http";

export interface LdapApi_ConfigRequestBody {
  /** key */
  key: string;

  /** 配置 */
  conf: LdapApi_ConfigRequestBody_conf;
}

/**
 * @description LDAP配置
 * @endpoint POST /api/v1/users/ldap_conf
 */
export const LdapApi_config = (
  data: LdapApi_ConfigRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.ldap.Config@1.0.0 */ http.post<void>(
    "api/gateway/logic.user_service/api/v1/users/ldap_conf",
    data,
    options
  );

export interface LdapApi_ConfigRequestBody_conf {
  /** name */
  name?: string;

  /** user_search_dn */
  user_search_dn?: string;

  /** user_filter */
  user_filter?: string;

  /** manager_dn */
  manager_dn?: string;

  /** manager_password */
  manager_password?: string;

  /** username */
  username?: string;

  /** org */
  org?: number;
}
