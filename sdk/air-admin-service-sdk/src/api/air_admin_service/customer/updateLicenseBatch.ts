import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_UpdateLicenseBatchRequestBody {
  /** 需要续期的orgId列表 */
  orgIds: number[];
}

export interface CustomerApi_UpdateLicenseBatchResponseBody {
  /** 延期成功的Org列表 */
  successOrgs: CustomerApi_UpdateLicenseBatchResponseBody_successOrgs_item[];
}

/**
 * @description 批量续期
 * @endpoint PUT /api/v1/customer/batch_license
 */
export const CustomerApi_updateLicenseBatch = async (
  data: CustomerApi_UpdateLicenseBatchRequestBody,
  options?: HttpOptions
): Promise<CustomerApi_UpdateLicenseBatchResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.UpdateLicenseBatch@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<CustomerApi_UpdateLicenseBatchResponseBody>
    >(
      "api/gateway/air_admin_service.customer.UpdateLicenseBatch/api/v1/customer/batch_license",
      data,
      options
    )
  ).data;

export interface CustomerApi_UpdateLicenseBatchResponseBody_successOrgs_item {
  /** 延期成功的org */
  orgId?: number;

  /** 延期成功的Org信息的instanceId */
  orgInfoId?: string;
}
