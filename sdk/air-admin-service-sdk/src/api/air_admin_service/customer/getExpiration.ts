import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_GetExpirationResponseBody {
  /** 过期时间戳 */
  expires: number;

  /** org是否已经是延期中状态 */
  updating: boolean;
}

/**
 * @description 获取过期时间戳
 * @endpoint GET /api/v1/customer/expiration
 */
export const CustomerApi_getExpiration = async (
  options?: HttpOptions
): Promise<CustomerApi_GetExpirationResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.GetExpiration@1.0.0 */ (
    await http.get<ResponseBodyWrapper<CustomerApi_GetExpirationResponseBody>>(
      "api/gateway/air_admin_service.customer.GetExpiration/api/v1/customer/expiration",
      options
    )
  ).data;
