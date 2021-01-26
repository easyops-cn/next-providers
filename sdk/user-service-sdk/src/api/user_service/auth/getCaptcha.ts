import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 登录验证码[内部]
 * @endpoint GET /api/v1/users/captcha
 */
export const getCaptcha = (options?: HttpOptions): Promise<void> =>
  http.get<void>(
    "api/gateway/user_service.auth.GetCaptcha/api/v1/users/captcha",
    options
  );
