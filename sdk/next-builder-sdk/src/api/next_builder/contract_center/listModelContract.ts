import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelModelContract,
  ModelFlowBuilderContractNamespace,
} from "../../../model/flow_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractCenterApi_ListModelContractRequestParams {
  /** namespaceId */
  namespaceId?: string;

  /** 查询条件：name */
  name?: string;

  /** 查询条件：描述信息 */
  description?: string;
}

export interface ContractCenterApi_ListModelContractResponseBody {
  /** 模型契约列表 */
  data?: ContractCenterApi_ListModelContractResponseBody_data_item[];
}

/**
 * @description model契约列表
 * @endpoint GET /api/v1/contract/model
 */
export const ContractCenterApi_listModelContract = async (
  params: ContractCenterApi_ListModelContractRequestParams,
  options?: HttpOptions
): Promise<ContractCenterApi_ListModelContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.ListModelContract@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ContractCenterApi_ListModelContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.ListModelContract/api/v1/contract/model",
      { ...options, params }
    )
  ).data;

export interface ContractCenterApi_ListModelContractResponseBody_data_item {
  /** 实例id */
  instanceId?: string;

  /** namespaceId */
  namespaceId?: string;

  /** name */
  name?: string;

  /** description */
  description?: string;

  /** 契约引用到的模型 */
  useModels?: ModelModelContract["useModels"];

  /** 契约对应的命名空间信息 */
  namespace?: Partial<ModelFlowBuilderContractNamespace>;

  /** 单个模型的最新版本 */
  latestVersion?: string;
}
