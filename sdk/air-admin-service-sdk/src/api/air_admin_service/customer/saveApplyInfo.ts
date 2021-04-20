import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SaveApplyInfoRequestBody {
  /** 用户姓名 */
  userName: string;

  /** 注册成功后的easyops平台的用户名 */
  userId: string;

  /** 性别 */
  gender: "male" | "female";

  /** 邮箱 */
  email: string;

  /** 手机号码 */
  phone: string;

  /** 企业名称 */
  company: string;

  /** 企业网址 */
  website?: string;

  /** 所属行业 */
  industry:
    | "internet"
    | "opeators"
    | "banking"
    | "electircity"
    | "logistics"
    | "finance"
    | "government"
    | "enterprise_service"
    | "system_integration"
    | "other";

  /** 公司规模 */
  scale: "below_50" | "below_100" | "below_200" | "above_200";

  /** 所在职位 */
  position:
    | "maintenance-engineer"
    | "RD"
    | "CEO"
    | "CIO"
    | "CTO"
    | "technical-support-engineer"
    | "IT-counselor"
    | "other";

  /** 发送的申请验证码消息 ID */
  message_id: string;

  /** 验证码 */
  verification_code: string;
}

/**
 * @description 保存用户的申请信息到cmdb
 * @endpoint POST /api/v1/customer/info
 */
export const CustomerApi_saveApplyInfo = (
  data: CustomerApi_SaveApplyInfoRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SaveApplyInfo */ http.post<void>(
    "api/gateway/air_admin_service.customer.SaveApplyInfo/api/v1/customer/info",
    data,
    options
  );
