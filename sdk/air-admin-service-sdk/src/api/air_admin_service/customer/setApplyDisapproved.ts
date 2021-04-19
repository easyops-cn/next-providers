import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SetApplyDisapprovedRequestBody {
  /** 客户申请信息, 模型CUSTOMER_APPLY_INFO的实例id */
  instanceId: string;
}

/**
 * @description 将客户申请状态修改成disapproved
 * @endpoint PUT /api/v1/customer/disapproved_apply
 */
export const CustomerApi_setApplyDisapproved = (
  data: CustomerApi_SetApplyDisapprovedRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SetApplyDisapproved */ http.put<void>(
    "api/gateway/air_admin_service.customer.SetApplyDisapproved/api/v1/customer/disapproved_apply",
    data,
    options
  );
