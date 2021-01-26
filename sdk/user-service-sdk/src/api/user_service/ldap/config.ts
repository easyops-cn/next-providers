import { http, HttpOptions } from "@next-core/brick-http";

export interface ConfigRequestBody {
  /** key */
  key: string;

  /** 配置 */
  conf: ConfigRequestBody_conf;
}

/**
 * @description LDAP配置
 * @endpoint POST /api/v1/users/ldap_conf
 */
export const config = (
  data: ConfigRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/user_service.ldap.Config/api/v1/users/ldap_conf",
    data,
    options
  );

export interface ConfigRequestBody_conf {
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
