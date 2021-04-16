import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_ValidateParameterRequestParams {
  /** 注册成功后的easyops平台的用户名 */
  userId: string;

  /** 邮箱 */
  email: string;
}

export interface CustomerApi_ValidateParameterResponseBody {
  /** 校验结果 */
  validateInfo?: "OK" | "duplicated_user" | "duplicated_email";
}

/**
 * @description 验证用户名userId和邮箱email是否唯一
 * @endpoint GET /api/v1/customer/uniqueness
 */
export const CustomerApi_validateParameter = async (
  params: CustomerApi_ValidateParameterRequestParams,
  options?: HttpOptions
): Promise<CustomerApi_ValidateParameterResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.ValidateParameter */ (
    await http.get<
      ResponseBodyWrapper<CustomerApi_ValidateParameterResponseBody>
    >(
      "api/gateway/air_admin_service.customer.ValidateParameter/api/v1/customer/uniqueness",
      { ...options, params }
    )
  ).data;
