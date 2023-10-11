import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SsoApi_ValidateAccessTokenResponseBody {
  /** 用户名 */
  username?: string;

  /** 用户ID */
  userId?: string;

  /** access token过期时长 */
  expired?: number;

  /** 昵称 */
  nickname?: string;
}

/**
 * @description 云盾平台子系统校验access token， 使用HEADER携带AccessToken
 * @endpoint POST /api/v1/sso/auth/token/validate
 */
export const SsoApi_validateAccessToken = async (
  options?: HttpOptions
): Promise<SsoApi_ValidateAccessTokenResponseBody> =>
  /**! @contract easyops.api.api_gateway.sso.ValidateAccessToken@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<SsoApi_ValidateAccessTokenResponseBody>
    >("api/v1/sso/auth/token/validate", undefined, options)
  ).data;
