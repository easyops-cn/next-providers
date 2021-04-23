import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_CreateOrgForCustomerBatchRequestBody {
  /** 客户申请信息, 模型CUSTOMER_APPLY_INFO的实例id列表 */
  instanceIds: string[];
}

export interface CustomerApi_CreateOrgForCustomerBatchResponseBody {
  /** 创建成功的实例id列表 */
  successIds: CustomerApi_CreateOrgForCustomerBatchResponseBody_successIds_item[];
}

/**
 * @description 批量为客户注册org，并申请user
 * @endpoint POST /api/v1/customer/batch_org
 */
export const CustomerApi_createOrgForCustomerBatch = async (
  data: CustomerApi_CreateOrgForCustomerBatchRequestBody,
  options?: HttpOptions
): Promise<CustomerApi_CreateOrgForCustomerBatchResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.CreateOrgForCustomerBatch */ (
    await http.post<
      ResponseBodyWrapper<CustomerApi_CreateOrgForCustomerBatchResponseBody>
    >(
      "api/gateway/air_admin_service.customer.CreateOrgForCustomerBatch/api/v1/customer/batch_org",
      data,
      options
    )
  ).data;

export interface CustomerApi_CreateOrgForCustomerBatchResponseBody_successIds_item {
  /** 申请信息的instanceId */
  applyInfoId?: string;

  /** Org信息的instanceId */
  orgInfoId?: string;
}
