import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFlowBuilderApiContract } from "../../../model/flow_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractCenterApi_BatchSearchContractRequestBody {
  /** contract查询条件 */
  contract?: ContractCenterApi_BatchSearchContractRequestBody_contract_item[];
}

export interface ContractCenterApi_BatchSearchContractResponseBody {
  /** 契约列表 */
  list?: ContractCenterApi_BatchSearchContractResponseBody_list_item[];
}

/**
 * @description 批量契约搜索
 * @endpoint POST /api/v1/contract/batch_search
 */
export const ContractCenterApi_batchSearchContract = async (
  data: ContractCenterApi_BatchSearchContractRequestBody,
  options?: HttpOptions
): Promise<ContractCenterApi_BatchSearchContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.BatchSearchContract@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ContractCenterApi_BatchSearchContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.BatchSearchContract/api/v1/contract/batch_search",
      data,
      options
    )
  ).data;

export interface ContractCenterApi_BatchSearchContractRequestBody_contract_item {
  /** 契约查找, namespace@name */
  fullContractName?: string;

  /** version */
  version?: string;
}

export interface ContractCenterApi_BatchSearchContractResponseBody_list_item {
  /** 契约name */
  name?: string;

  /** 命名空间 */
  namespaceId?: string;

  /** version */
  version?: string;

  /** endpoint */
  endpoint?: ModelFlowBuilderApiContract["endpoint"];

  /** request */
  request?: ModelFlowBuilderApiContract["request"];

  /** response */
  response?: ModelFlowBuilderApiContract["response"];

  /** 服务名字 */
  serviceName?: string;
}
