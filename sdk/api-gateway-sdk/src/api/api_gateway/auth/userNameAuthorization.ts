import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_UserNameAuthorizationRequestBody {
  /** rsa公钥加密后的认证参数 */
  encryptedData: string;
}

export interface AuthApi_UserNameAuthorizationResponseBody {
  /** 认证 token */
  token?: string;

  /** 更新 token */
  refreshToken?: string;
}

/**
 * @description 用户名认证，通过返回token
 * @endpoint POST /api/auth/username/authorization
 */
export const AuthApi_userNameAuthorization = async (
  data: AuthApi_UserNameAuthorizationRequestBody,
  options?: HttpOptions
): Promise<AuthApi_UserNameAuthorizationResponseBody> =>
  /**! @contract easyops.api.api_gateway.auth.UserNameAuthorization@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AuthApi_UserNameAuthorizationResponseBody>
    >("api/auth/username/authorization", data, options)
  ).data;
