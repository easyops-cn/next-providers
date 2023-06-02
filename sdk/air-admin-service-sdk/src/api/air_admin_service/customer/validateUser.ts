import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_ValidateUserRequestParams {
  /** 用户Id字符串, 用于申请平台用户 */
  userId: string;
}

export interface CustomerApi_ValidateUserResponseBody {
  /** 校验结果 */
  validateInfo?: "OK" | "duplicated_user" | "invalid_user";
}

/**
 * @description 验证用户名userId是否唯一
 * @endpoint GET /api/v1/customer/user_uniqueness
 */
export const CustomerApi_validateUser = async (
  params: CustomerApi_ValidateUserRequestParams,
  options?: HttpOptions
): Promise<CustomerApi_ValidateUserResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.ValidateUser@1.0.0 */ (
    await http.get<ResponseBodyWrapper<CustomerApi_ValidateUserResponseBody>>(
      "api/gateway/air_admin_service.customer.ValidateUser/api/v1/customer/user_uniqueness",
      { ...options, params }
    )
  ).data;
