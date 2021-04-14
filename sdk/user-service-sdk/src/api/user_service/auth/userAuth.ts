import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAuthRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password: string;

  /** 验证码 */
  phrase?: string;
}

export interface UserAuthResponseBody {
  /** 用户名 */
  name: string;

  /** 用户instanceId */
  instanceId?: string;

  /** org */
  org: number;
}

/**
 * @description 登录认证[内部]
 * @endpoint POST /api/v1/users/auth
 */
export const userAuth = async (
  data: UserAuthRequestBody,
  options?: HttpOptions
): Promise<UserAuthResponseBody> =>
  /**! @contract easyops.api.user_service.auth.UserAuth */ (
    await http.post<ResponseBodyWrapper<UserAuthResponseBody>>(
      "api/gateway/user_service.auth.UserAuth/api/v1/users/auth",
      data,
      options
    )
  ).data;
