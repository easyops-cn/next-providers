import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserValidateRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password: string;
}

export interface UserValidateResponseBody {
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
export const userValidate = async (
  data: UserValidateRequestBody,
  options?: HttpOptions
): Promise<UserValidateResponseBody> =>
  /**! @contract easyops.api.user_service.auth.UserValidate */ (
    await http.post<ResponseBodyWrapper<UserValidateResponseBody>>(
      "api/gateway/user_service.auth.UserValidate/api/v1/users/validate",
      data,
      options
    )
  ).data;
