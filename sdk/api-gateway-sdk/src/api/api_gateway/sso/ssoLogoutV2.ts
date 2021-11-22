import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SsoApi_SsoLogoutV2ResponseBody {
  /** 登出后回调地址 */
  logoutCallbackUrl?: string;
}

/**
 * @description SSO注销
 * @endpoint POST /api/v2/sso/logout/:protocol
 */
export const SsoApi_ssoLogoutV2 = async (
  protocol: string | number,
  options?: HttpOptions
): Promise<SsoApi_SsoLogoutV2ResponseBody> =>
  /**! @contract easyops.api.api_gateway.sso.SSOLogoutV2@1.0.0 */ (
    await http.post<ResponseBodyWrapper<SsoApi_SsoLogoutV2ResponseBody>>(
      `api/v2/sso/logout/${protocol}`,
      undefined,
      options
    )
  ).data;
