import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_UserValidateRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password: string;
}

export interface AuthApi_UserValidateResponseBody {
  /** 用户名 */
  name: string;

  /** 用户instanceId */
  instanceId?: string;

  /** org */
  org: number;
}

/**
 * @description 用户密码验证[内部]
 * @endpoint POST /api/v1/users/validate
 */
export const AuthApi_userValidate = async (
  data: AuthApi_UserValidateRequestBody,
  options?: HttpOptions
): Promise<AuthApi_UserValidateResponseBody> =>
  /**! @contract easyops.api.user_service.auth.UserValidate@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AuthApi_UserValidateResponseBody>>(
      "api/gateway/logic.user_service/api/v1/users/validate",
      data,
      options
    )
  ).data;
