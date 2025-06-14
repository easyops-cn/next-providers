import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_AlterSelfPasswordRequestBody {
  /** 新密码 */
  password: string;

  /** 原密码 */
  oldPassword: string;
}

/**
 * @description 修改自己密码
 * @endpoint POST /api/v1/users/password
 */
export const UserAdminApi_alterSelfPassword = (
  data: UserAdminApi_AlterSelfPasswordRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.AlterSelfPassword@1.0.0 */ http.post<void>(
    "api/gateway/logic.user_service/api/v1/users/password",
    data,
    options
  );
