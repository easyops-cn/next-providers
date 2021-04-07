import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UpdateLicenseBatchRequestBody {
  /** 需要续期的EASYOPS_AIR_CUSTOMER_ORG的实例id列表 */
  instanceIds: string[];
}

export interface UpdateLicenseBatchResponseBody {
  /** 续期失败的instanceId列表 */
  failedInstanceIds: string[];
}

/**
 * @description 批量续期
 * @endpoint PUT /api/v1/customer/batch_license
 */
export const updateLicenseBatch = async (
  data: UpdateLicenseBatchRequestBody,
  options?: HttpOptions
): Promise<UpdateLicenseBatchResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdateLicenseBatchResponseBody>>(
      "api/gateway/air_admin_service.customer.UpdateLicenseBatch/api/v1/customer/batch_license",
      data,
      options
    )
  ).data;
