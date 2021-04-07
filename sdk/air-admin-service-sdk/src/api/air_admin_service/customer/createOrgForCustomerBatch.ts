import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateOrgForCustomerBatchRequestBody {
  /** 客户申请信息, 模型CUSTOMER_APPLY_INFO的实例id列表 */
  instanceIds: string[];
}

export interface CreateOrgForCustomerBatchResponseBody {
  /** 创建失败的实例id列表 */
  failedInstanceIds: string[];
}

/**
 * @description 批量为客户注册org，并申请user
 * @endpoint POST /api/v1/customer/batch_org
 */
export const createOrgForCustomerBatch = async (
  data: CreateOrgForCustomerBatchRequestBody,
  options?: HttpOptions
): Promise<CreateOrgForCustomerBatchResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateOrgForCustomerBatchResponseBody>>(
      "api/gateway/air_admin_service.customer.CreateOrgForCustomerBatch/api/v1/customer/batch_org",
      data,
      options
    )
  ).data;
