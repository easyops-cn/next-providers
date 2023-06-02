import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_SendApprovedEmailRequestBody {
  /** EASYOPS_AIR_CUSTOMER_ORG的实例id列表 */
  instanceIds: string[];
}

export interface CustomerApi_SendApprovedEmailResponseBody {
  /** 发送邮件失败的实例id列表 */
  failedInstanceIds: string[];
}

/**
 * @description 发送审核完成邮件给客户
 * @endpoint POST /api/v1/customer/approved_email
 */
export const CustomerApi_sendApprovedEmail = async (
  data: CustomerApi_SendApprovedEmailRequestBody,
  options?: HttpOptions
): Promise<CustomerApi_SendApprovedEmailResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.SendApprovedEmail@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<CustomerApi_SendApprovedEmailResponseBody>
    >(
      "api/gateway/air_admin_service.customer.SendApprovedEmail/api/v1/customer/approved_email",
      data,
      options
    )
  ).data;
