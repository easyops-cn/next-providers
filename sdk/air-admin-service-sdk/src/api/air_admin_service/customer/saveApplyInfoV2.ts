import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SaveApplyInfoV2RequestBody {
  /** 手机号码 */
  phone: string;

  /** 邮箱地址 */
  email: string;

  /** 发送的申请验证码消息 ID */
  message_id: string;

  /** 验证码 */
  verification_code: string;

  /** 申请来源链接 */
  source: string;
}

/**
 * @description 保存用户的体验申请信息到cmdb
 * @endpoint POST /api/v2/customer/info
 */
export const CustomerApi_saveApplyInfoV2 = (
  data: CustomerApi_SaveApplyInfoV2RequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SaveApplyInfoV2 */ http.post<void>(
    "api/gateway/air_admin_service.customer.SaveApplyInfoV2/api/v2/customer/info",
    data,
    options
  );
