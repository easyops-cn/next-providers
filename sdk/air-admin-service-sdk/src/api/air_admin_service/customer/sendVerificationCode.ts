import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SendVerificationCodeRequestBody {
  /** 接收申请验证码的手机号码 */
  phone_number: string;
}

/**
 * @description 获取验证码
 * @endpoint POST /api/v1/customer/verification-code
 */
export const CustomerApi_sendVerificationCode = (
  data: CustomerApi_SendVerificationCodeRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SendVerificationCode@1.0.0 */ http.post<void>(
    "api/gateway/air_admin_service.customer.SendVerificationCode/api/v1/customer/verification-code",
    data,
    options
  );
