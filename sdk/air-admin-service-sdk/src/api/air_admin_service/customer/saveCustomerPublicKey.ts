import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SaveCustomerPublicKeyRequestBody {
  /** 用户orgId */
  orgId: number;

  /** 平台用户名 */
  userId: string;

  /** 用户密码 */
  passwd: string;

  /** 用户提交的公钥 */
  publicKey: string;
}

/**
 * @description  保存用户提交的公钥
 * @endpoint POST /api/air_admin_service/customer/v1/publickey
 */
export const CustomerApi_saveCustomerPublicKey = (
  data: CustomerApi_SaveCustomerPublicKeyRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SaveCustomerPublicKey@1.0.0 */ http.post<void>(
    "api/gateway/air_admin_service.customer.SaveCustomerPublicKey/api/air_admin_service/customer/v1/publickey",
    data,
    options
  );
