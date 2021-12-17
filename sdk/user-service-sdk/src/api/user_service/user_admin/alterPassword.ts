import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_AlterPasswordRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password?: string;
}

/**
 * @description 修改密码[内部]
 * @endpoint POST /api/v1/users/alter_password
 */
export const UserAdminApi_alterPassword = (
  data: UserAdminApi_AlterPasswordRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.AlterPassword@1.0.0 */ http.post<void>(
    "api/gateway/user_service.user_admin.AlterPassword/api/v1/users/alter_password",
    data,
    options
  );
