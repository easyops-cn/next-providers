import { http, HttpOptions } from "@next-core/brick-http";

export interface ForgotPasswordRequestBody {
  /** 邮箱 */
  email: string;

  /** 重置密码地址 */
  url: string;
}

/**
 * @description 用户忘记密码
 * @endpoint POST /api/v1/users/password/forgot
 */
export const forgotPassword = (
  data: ForgotPasswordRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.ForgotPassword */ http.post<void>(
    "api/gateway/user_service.user_admin.ForgotPassword/api/v1/users/password/forgot",
    data,
    options
  );
