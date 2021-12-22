import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SaveConsultInfoRequestBody {
  /** 手机号码 */
  phone: string;

  /** 验证码 */
  verification_code: string;

  /** 用户名 */
  username: string;
}

/**
 * @description 保存用户预约咨询信息
 * @endpoint POST /api/v1/consult/info
 */
export const CustomerApi_saveConsultInfo = (
  data: CustomerApi_SaveConsultInfoRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SaveConsultInfo@1.0.0 */ http.post<void>(
    "api/gateway/air_admin_service.customer.SaveConsultInfo/api/v1/consult/info",
    data,
    options
  );
