import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 登录验证码[内部]
 * @endpoint GET /api/v1/users/captcha
 */
export const AuthApi_getCaptcha = (options?: HttpOptions): Promise<Blob> =>
  /**! @contract easyops.api.user_service.auth.GetCaptcha@1.0.0 */ http.get<Blob>(
    "api/gateway/user_service.auth.GetCaptcha/api/v1/users/captcha",
    { ...options, responseType: "blob" }
  );
