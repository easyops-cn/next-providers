import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_SendApplicationVerificationCodeRequestBody {
  /** 接收申请验证码的手机号码 */
  phone_number: string;
}

export interface CustomerApi_SendApplicationVerificationCodeResponseBody {
  /** 发送的消息 ID */
  message_id: string;
}

/**
 * @description 发送申请验证码
 * @endpoint POST /api/v1/customer/application/verification-code
 */
export const CustomerApi_sendApplicationVerificationCode = async (
  data: CustomerApi_SendApplicationVerificationCodeRequestBody,
  options?: HttpOptions
): Promise<CustomerApi_SendApplicationVerificationCodeResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.SendApplicationVerificationCode */ (
    await http.post<
      ResponseBodyWrapper<CustomerApi_SendApplicationVerificationCodeResponseBody>
    >(
      "api/gateway/air_admin_service.customer.SendApplicationVerificationCode/api/v1/customer/application/verification-code",
      data,
      options
    )
  ).data;
