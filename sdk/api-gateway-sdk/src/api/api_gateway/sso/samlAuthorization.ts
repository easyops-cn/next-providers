import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description saml 登录 post 回调接口
 * @endpoint POST /api/v1/sso/saml/authorization
 */
export const SsoApi_samlAuthorization = (
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.api_gateway.sso.SAMLAuthorization */ http.post<void>(
    "api/v1/sso/saml/authorization",
    undefined,
    options
  );
