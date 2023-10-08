import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_InvitedUserRegisterRequestBody {
  /** 用户名 */
  username: string;

  /** 密码 */
  password: string;

  /** 邮箱 */
  email: string;

  /** 邀请码 */
  invitation_code: string;
}

/**
 * @description 受邀用户注册
 * @endpoint POST /api/v1/users/register_with_code
 */
export const UserAdminApi_invitedUserRegister = (
  data: UserAdminApi_InvitedUserRegisterRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.InvitedUserRegister@1.1.0 */ http.post<void>(
    "api/gateway/user_service.user_admin.InvitedUserRegister/api/v1/users/register_with_code",
    data,
    options
  );
