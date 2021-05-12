import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description SSO注销
 * @endpoint POST /api/v1/sso/logout/:protocol
 */
export const SsoApi_ssoLogout = (
  protocol: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.api_gateway.sso.SSOLogout */ http.post<void>(
    `api/v1/sso/logout/${protocol}`,
    undefined,
    options
  );
