import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_UserNameValidateRequestBody {
  /** 用户名 */
  name: string;
}

export interface AuthApi_UserNameValidateResponseBody {
  /** 用户名 */
  name: string;

  /** 用户instanceId */
  instanceId?: string;

  /** org */
  org: number;
}

/**
 * @description 用户名验证[内部]
 * @endpoint POST /api/v1/users/name/validate
 */
export const AuthApi_userNameValidate = async (
  data: AuthApi_UserNameValidateRequestBody,
  options?: HttpOptions
): Promise<AuthApi_UserNameValidateResponseBody> =>
  /**! @contract easyops.api.user_service.auth.UserNameValidate@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AuthApi_UserNameValidateResponseBody>>(
      "api/gateway/logic.user_service/api/v1/users/name/validate",
      data,
      options
    )
  ).data;
