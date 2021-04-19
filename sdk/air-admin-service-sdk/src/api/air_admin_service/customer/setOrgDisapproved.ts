import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SetOrgDisapprovedRequestBody {
  /** 需要修改状态的org */
  orgId: number;
}

/**
 * @description 将客户Org的状态修改成disapproved
 * @endpoint PUT /api/v1/customer/disapproved_org
 */
export const CustomerApi_setOrgDisapproved = (
  data: CustomerApi_SetOrgDisapprovedRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SetOrgDisapproved */ http.put<void>(
    "api/gateway/air_admin_service.customer.SetOrgDisapproved/api/v1/customer/disapproved_org",
    data,
    options
  );
