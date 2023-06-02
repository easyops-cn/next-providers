import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_SetApplyDisapprovedBatchRequestBody {
  /** 客户申请信息, 模型CUSTOMER_APPLY_INFO的实例id的列表 */
  instanceIds: string[];
}

export interface CustomerApi_SetApplyDisapprovedBatchResponseBody {
  /** 修改失败的id列表 */
  failedInstanceIds?: string[];
}

/**
 * @description 将客户申请状态修改成disapproved
 * @endpoint PUT /api/v1/customer/disapproved_apply
 */
export const CustomerApi_setApplyDisapprovedBatch = async (
  data: CustomerApi_SetApplyDisapprovedBatchRequestBody,
  options?: HttpOptions
): Promise<CustomerApi_SetApplyDisapprovedBatchResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.SetApplyDisapprovedBatch@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<CustomerApi_SetApplyDisapprovedBatchResponseBody>
    >(
      "api/gateway/air_admin_service.customer.SetApplyDisapprovedBatch/api/v1/customer/disapproved_apply",
      data,
      options
    )
  ).data;
