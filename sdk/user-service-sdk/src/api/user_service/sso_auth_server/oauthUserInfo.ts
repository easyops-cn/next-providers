import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SsoAuthServerApi_OauthUserInfoRequestParams {
  /** token */
  accessToken?: string;
}

export interface SsoAuthServerApi_OauthUserInfoResponseBody {
  /** 用户信息 */
  sub?: string;
}

/**
 * @description oauth2授权码模式，获取userInfo接口
 * @endpoint GET /api/v1/user_service/sso_auth_server/oauth2/user_info
 */
export const SsoAuthServerApi_oauthUserInfo = async (
  params: SsoAuthServerApi_OauthUserInfoRequestParams,
  options?: HttpOptions
): Promise<SsoAuthServerApi_OauthUserInfoResponseBody> =>
  /**! @contract easyops.api.user_service.sso_auth_server.OauthUserInfo@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<SsoAuthServerApi_OauthUserInfoResponseBody>
    >(
      "api/gateway/logic.user_service/api/v1/user_service/sso_auth_server/oauth2/user_info",
      { ...options, params }
    )
  ).data;
