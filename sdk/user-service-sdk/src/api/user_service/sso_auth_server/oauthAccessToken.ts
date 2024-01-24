import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SsoAuthServerApi_OauthAccessTokenRequestBody {
  /** 重定向地址 */
  redirectUri: string;

  /** 应用id */
  clientId: string;

  /** 可信任的密钥凭证 */
  clientSecret?: string;

  /** 授权码，这里传拿到的授权码 */
  code: string;

  /** 授权类型，这里是使用授权码，传authorization_code */
  grantType: string;
}

export interface SsoAuthServerApi_OauthAccessTokenResponseBody {
  /** 生成的accessToken */
  accessToken?: string;

  /** 超时时间，单位秒 */
  expiresIn?: number;

  /** 访问令牌的类型，通常值为 "Bearer" */
  tokenType?: string;

  /** 表示访问令牌的范围 */
  scope?: string;
}

/**
 * @description oauth2授权码模式，获取accessToken接口
 * @endpoint POST /api/v1/user_service/sso_auth_server/oauth2/access_token
 */
export const SsoAuthServerApi_oauthAccessToken = async (
  data: SsoAuthServerApi_OauthAccessTokenRequestBody,
  options?: HttpOptions
): Promise<SsoAuthServerApi_OauthAccessTokenResponseBody> =>
  /**! @contract easyops.api.user_service.sso_auth_server.OauthAccessToken@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<SsoAuthServerApi_OauthAccessTokenResponseBody>
    >(
      "api/gateway/user_service.sso_auth_server.OauthAccessToken/api/v1/user_service/sso_auth_server/oauth2/access_token",
      data,
      options
    )
  ).data;
