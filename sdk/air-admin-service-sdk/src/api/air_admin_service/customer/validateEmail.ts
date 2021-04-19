import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_ValidateEmailRequestParams {
  /** 邮箱 */
  email: string;
}

export interface CustomerApi_ValidateEmailResponseBody {
  /** 校验结果 */
  validateInfo?: "OK" | "duplicated_email";
}

/**
 * @description 验证邮箱email是否唯一
 * @endpoint GET /api/v1/customer/email_uniqueness
 */
export const CustomerApi_validateEmail = async (
  params: CustomerApi_ValidateEmailRequestParams,
  options?: HttpOptions
): Promise<CustomerApi_ValidateEmailResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.ValidateEmail */ (
    await http.get<ResponseBodyWrapper<CustomerApi_ValidateEmailResponseBody>>(
      "api/gateway/air_admin_service.customer.ValidateEmail/api/v1/customer/email_uniqueness",
      { ...options, params }
    )
  ).data;
