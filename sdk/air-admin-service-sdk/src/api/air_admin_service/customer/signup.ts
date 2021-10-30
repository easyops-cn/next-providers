import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SignupRequestBody {
  /** 用户名 */
  username: string;

  /** 邮箱字符串 */
  email: string;

  /** 密码 */
  password: string;

  /** 手机号码 */
  phone: string;

  /** 验证码 */
  verification_code: string;

  /** 验证码消息 ID */
  message_id: string;
}

/**
 * @description SaaS平台用户注册
 * @endpoint POST /api/v1/customer/signup
 */
export const CustomerApi_signup = (
  data: CustomerApi_SignupRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.Signup */ http.post<void>(
    "api/gateway/air_admin_service.customer.Signup/api/v1/customer/signup",
    data,
    options
  );
