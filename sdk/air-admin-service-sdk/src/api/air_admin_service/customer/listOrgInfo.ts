import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCustomerOrgInfo } from "../../../model/air_admin_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CustomerApi_ListOrgInfoRequestBody {
  /** 查询条件, 企业或者org的字符串 */
  query?: string;

  /** org使用状态: 已过期，正常，延期中，即将过期 */
  state?: "expired" | "normal" | "updating" | "willExpired";

  /** 页数 */
  page?: number;

  /** 页码 */
  page_size?: number;
}

export interface CustomerApi_ListOrgInfoResponseBody {
  /** 数据 */
  list?: Partial<ModelCustomerOrgInfo>[];

  /** 总数 */
  total?: number;

  /** 页数 */
  page?: number;

  /** 页码 */
  page_size?: number;
}

/**
 * @description 列出符合要求的org信息
 * @endpoint POST /api/v1/customer/org/list
 */
export const CustomerApi_listOrgInfo = async (
  data: CustomerApi_ListOrgInfoRequestBody,
  options?: HttpOptions
): Promise<CustomerApi_ListOrgInfoResponseBody> =>
  /**! @contract easyops.api.air_admin_service.customer.ListOrgInfo */ (
    await http.post<ResponseBodyWrapper<CustomerApi_ListOrgInfoResponseBody>>(
      "api/gateway/air_admin_service.customer.ListOrgInfo/api/v1/customer/org/list",
      data,
      options
    )
  ).data;
