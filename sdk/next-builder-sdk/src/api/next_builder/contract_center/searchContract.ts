import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractCenterApi_SearchContractRequestBody {
  /** 契约查找条件, namespace@name */
  fullContractName?: string;

  /** version查询 */
  version?: string;

  /** page */
  page?: number;

  /** pageSize */
  pageSize?: number;
}

export interface ContractCenterApi_SearchContractResponseBody {
  /** 契约列表 */
  data?: ContractCenterApi_SearchContractResponseBody_data_item[];
}

/**
 * @description 契约搜索
 * @endpoint POST /api/v1/contract/search
 */
export const ContractCenterApi_searchContract = async (
  data: ContractCenterApi_SearchContractRequestBody,
  options?: HttpOptions
): Promise<ContractCenterApi_SearchContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.SearchContract@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ContractCenterApi_SearchContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.SearchContract/api/v1/contract/search",
      data,
      options
    )
  ).data;

export interface ContractCenterApi_SearchContractResponseBody_data_item {
  /** 契约全名，namespaceId+name */
  fullContractName?: string;

  /** 契约版本列表 */
  version?: string[];
}
