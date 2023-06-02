import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SendConsultVerificationCodeRequestBody {
  /** 接收申请验证码的手机号码 */
  phone_number: string;
}

/**
 * @description 获取预约验证码
 * @endpoint POST /api/v1/consult/verification-code
 */
export const CustomerApi_sendConsultVerificationCode = (
  data: CustomerApi_SendConsultVerificationCodeRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SendConsultVerificationCode@1.1.0 */ http.post<void>(
    "api/gateway/air_admin_service.customer.SendConsultVerificationCode/api/v1/consult/verification-code",
    data,
    options
  );
