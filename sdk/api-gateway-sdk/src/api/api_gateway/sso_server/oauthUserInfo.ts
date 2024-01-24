import { http, HttpOptions } from "@next-core/brick-http";

export interface SsoServerApi_OauthUserInfoResponseBody {
  /** 用户信息 */
  sub?: string;
}

/**
 * @description oauth2授权码模式，获取userInfo接口
 * @endpoint GET /api/v1/api_gateway/sso_server/oauth2/user_info
 */
export const SsoServerApi_oauthUserInfo = (
  options?: HttpOptions
): Promise<SsoServerApi_OauthUserInfoResponseBody> =>
  /**! @contract easyops.api.api_gateway.sso_server.OauthUserInfo@1.0.0 */ http.get<SsoServerApi_OauthUserInfoResponseBody>(
    "api/v1/api_gateway/sso_server/oauth2/user_info",
    options
  );
