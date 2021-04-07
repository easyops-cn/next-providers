import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SendUpdatedEmailRequestBody {
  /** EASYOPS_AIR_CUSTOMER_ORG的实例id列表 */
  instanceIds: string[];
}

export interface SendUpdatedEmailResponseBody {
  /** 发送邮件失败的实例id列表 */
  failedInstanceIds: string[];
}

/**
 * @description 发送延期申请的审核完成邮件给客户
 * @endpoint POST /api/v1/customer/updated_email
 */
export const sendUpdatedEmail = async (
  data: SendUpdatedEmailRequestBody,
  options?: HttpOptions
): Promise<SendUpdatedEmailResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<SendUpdatedEmailResponseBody>>(
      "api/gateway/air_admin_service.customer.SendUpdatedEmail/api/v1/customer/updated_email",
      data,
      options
    )
  ).data;
