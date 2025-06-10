import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SsoAuthServerApi_OauthAuthRequestParams {
  /** 重定向地址 */
  redirectUri: string;

  /** 应用id */
  clientId: string;

  /** 响应类型，这里默认传code */
  responseType?: string;

  /** 用户名 */
  username?: string;

  /** 授权范围，这里直接传read，授权后可以获取用户名 */
  scope?: string;

  /** 用于防止 CSRF 攻击，客户端生成的随机值，认证服务器会原样返回，推荐传这个参数 */
  state?: string;
}

export interface SsoAuthServerApi_OauthAuthResponseBody {
  /** 授权码 */
  code?: string;

  /** 与授权请求中的 state 参数一致，用于防止 CSRF 攻击，认证服务器会原样返回 */
  state?: string;

  /** 重定向方式，在oauth2中，这里应该是直接接口302，但为了后续可以兼容多种协议，这里由页面重定向 */
  redirectWay?: "GET" | "POST";

  /** 重定向uri */
  redirectUri?: string;
}

/**
 * @description oauth2授权码模式，授权接口
 * @endpoint GET /api/v1/user_service/sso_auth_server/oauth2/auth
 */
export const SsoAuthServerApi_oauthAuth = async (
  params: SsoAuthServerApi_OauthAuthRequestParams,
  options?: HttpOptions
): Promise<SsoAuthServerApi_OauthAuthResponseBody> =>
  /**! @contract easyops.api.user_service.sso_auth_server.OauthAuth@1.0.0 */ (
    await http.get<ResponseBodyWrapper<SsoAuthServerApi_OauthAuthResponseBody>>(
      "api/gateway/logic.user_service/api/v1/user_service/sso_auth_server/oauth2/auth",
      { ...options, params }
    )
  ).data;
