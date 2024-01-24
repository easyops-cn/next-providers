import { http, HttpOptions } from "@next-core/brick-http";

export interface SsoServerApi_OauthAccessTokenRequestBody {
  /** clientId */
  client_id: string;

  /** 可信任的密钥凭证 */
  client_secret?: string;

  /** 重定向uri */
  redirect_uri: string;

  /** 授权码，这里传拿到的授权码 */
  code: string;

  /** 授权类型，这里是使用授权码，传authorization_code */
  grant_type: string;
}

export interface SsoServerApi_OauthAccessTokenResponseBody {
  /** 生成的accessToken */
  access_token?: string;

  /** 超时时间，单位秒 */
  expires_in?: number;

  /** 访问令牌的类型，通常值为 "Bearer" */
  token_type?: string;

  /** 表示访问令牌的范围 */
  scope?: string;

  /** refresh_token，这里先声明这个字段，暂不生成 */
  refresh_token?: string;
}

/**
 * @description oauth2授权码模式，获取accessToken接口
 * @endpoint POST /api/v1/api_gateway/sso_server/oauth2/access_token
 */
export const SsoServerApi_oauthAccessToken = (
  data: SsoServerApi_OauthAccessTokenRequestBody,
  options?: HttpOptions
): Promise<SsoServerApi_OauthAccessTokenResponseBody> =>
  /**! @contract easyops.api.api_gateway.sso_server.OauthAccessToken@1.0.0 */ http.post<SsoServerApi_OauthAccessTokenResponseBody>(
    "api/v1/api_gateway/sso_server/oauth2/access_token",
    data,
    options
  );
