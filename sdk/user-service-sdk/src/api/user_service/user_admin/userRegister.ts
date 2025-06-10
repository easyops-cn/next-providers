import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_UserRegisterRequestBody {
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

  /** 昵称 */
  nickname?: string;
}

export interface UserAdminApi_UserRegisterResponseBody {
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
export const UserAdminApi_userRegister = async (
  data: UserAdminApi_UserRegisterRequestBody,
  options?: HttpOptions
): Promise<UserAdminApi_UserRegisterResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.UserRegister@1.0.1 */ (
    await http.post<ResponseBodyWrapper<UserAdminApi_UserRegisterResponseBody>>(
      "api/gateway/logic.user_service/api/v1/users/register",
      data,
      options
    )
  ).data;
