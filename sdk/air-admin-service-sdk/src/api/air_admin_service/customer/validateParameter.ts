import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ValidateParameterRequestParams {
  /** 注册成功后的easyops平台的用户名 */
  userId: string;

  /** 邮箱 */
  email: string;
}

export interface ValidateParameterResponseBody {
  /** 校验结果 */
  validateInfo?: "OK" | "duplicated_user" | "duplicated_email";
}

/**
 * @description 验证用户名userId和邮箱email是否唯一
 * @endpoint GET /api/v1/customer/uniqueness
 */
export const validateParameter = async (
  params: ValidateParameterRequestParams,
  options?: HttpOptions
): Promise<ValidateParameterResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ValidateParameterResponseBody>>(
      "api/gateway/air_admin_service.customer.ValidateParameter/api/v1/customer/uniqueness",
      { ...options, params }
    )
  ).data;
