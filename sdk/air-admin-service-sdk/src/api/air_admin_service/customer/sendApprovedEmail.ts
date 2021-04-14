import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SendApprovedEmailRequestBody {
  /** EASYOPS_AIR_CUSTOMER_ORG的实例id列表 */
  instanceIds: string[];
}

export interface SendApprovedEmailResponseBody {
  /** 发送邮件失败的实例id列表 */
  failedInstanceIds: string[];
}

/**
 * @description 发送审核完成邮件给客户
 * @endpoint POST /api/v1/customer/approved_email
 */
export const sendApprovedEmail = async (
  data: SendApprovedEmailRequestBody,
  options?: HttpOptions
): Promise<SendApprovedEmailResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.SendApprovedEmail */ (
    await http.post<ResponseBodyWrapper<SendApprovedEmailResponseBody>>(
      "api/gateway/air_admin_service.customer.SendApprovedEmail/api/v1/customer/approved_email",
      data,
      options
    )
  ).data;
