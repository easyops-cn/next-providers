import { http, HttpOptions } from "@next-core/brick-http";

export interface AlterPasswordRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password?: string;
}

/**
 * @description 修改密码[内部]
 * @endpoint POST /api/v1/users/alter_password
 */
export const alterPassword = (
  data: AlterPasswordRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/user_service.user_admin.AlterPassword/api/v1/users/alter_password",
    data,
    options
  );
