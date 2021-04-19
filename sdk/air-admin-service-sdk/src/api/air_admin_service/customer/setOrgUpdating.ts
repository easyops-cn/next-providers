import { http, HttpOptions } from "@next-core/brick-http";

export interface CustomerApi_SetOrgUpdatingRequestBody {
  /** 需要修改状态的org */
  orgId: number;
}

/**
 * @description 将客户Org的状态修改成updating
 * @endpoint PUT /api/v1/customer/updating_org
 */
export const CustomerApi_setOrgUpdating = (
  data: CustomerApi_SetOrgUpdatingRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.air_admin_service.customer.SetOrgUpdating */ http.put<void>(
    "api/gateway/air_admin_service.customer.SetOrgUpdating/api/v1/customer/updating_org",
    data,
    options
  );
