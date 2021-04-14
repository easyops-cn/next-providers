import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserRegisterRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password: string;

  /** 邮箱 */
  email: string;

  /** org */
  org: number;

  /** isAdmin */
  isAdmin?: boolean;
}

export interface UserRegisterResponseBody {
  /** 用户名 */
  name: string;

  /** 邮箱 */
  email: string;

  /** org */
  org: number;

  /** instanceId */
  instanceId: string;
}

/**
 * @description 用户注册[内部]
 * @endpoint POST /api/v1/users/register
 */
export const userRegister = async (
  data: UserRegisterRequestBody,
  options?: HttpOptions
): Promise<UserRegisterResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.UserRegister */ (
    await http.post<ResponseBodyWrapper<UserRegisterResponseBody>>(
      "api/gateway/user_service.user_admin.UserRegister/api/v1/users/register",
      data,
      options
    )
  ).data;
