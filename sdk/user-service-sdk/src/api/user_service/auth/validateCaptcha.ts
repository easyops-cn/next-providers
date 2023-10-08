import { http, HttpOptions } from "@next-core/brick-http";

export interface AuthApi_ValidateCaptchaRequestBody {
  /** 验证码 */
  phrase: string;
}

/**
 * @description 验证码校验
 * @endpoint POST /api/v1/users/validate/captcha
 */
export const AuthApi_validateCaptcha = (
  data: AuthApi_ValidateCaptchaRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.auth.ValidateCaptcha@1.0.0 */ http.post<void>(
    "api/gateway/user_service.auth.ValidateCaptcha/api/v1/users/validate/captcha",
    data,
    options
  );
