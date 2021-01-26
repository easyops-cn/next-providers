import { http, HttpOptions } from "@next-core/brick-http";

export interface ResetPasswordRequestBody {
  /** 用户名 */
  username: string;

  /** 时间戳 */
  ts: number;

  /** 新密码 */
  password: string;

  /** 重置密码key */
  key: string;
}

/**
 * @description 用户重置密码
 * @endpoint POST /api/v1/users/password/reset
 */
export const resetPassword = (
  data: ResetPasswordRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/user_service.user_admin.ResetPassword/api/v1/users/password/reset",
    data,
    options
  );
