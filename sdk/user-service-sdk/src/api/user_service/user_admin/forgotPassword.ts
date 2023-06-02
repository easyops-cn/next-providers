import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_ForgotPasswordRequestBody {
  /** 邮箱 */
  email: string;

  /** 重置密码地址 */
  url: string;
}

/**
 * @description 用户忘记密码
 * @endpoint POST /api/v1/users/password/forgot
 */
export const UserAdminApi_forgotPassword = (
  data: UserAdminApi_ForgotPasswordRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.ForgotPassword@1.0.0 */ http.post<void>(
    "api/gateway/user_service.user_admin.ForgotPassword/api/v1/users/password/forgot",
    data,
    options
  );
