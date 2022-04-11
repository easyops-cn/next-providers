import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFlowBuilderApiContract } from "../../../model/flow_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractCenterApi_ListApiContractRequestParams {
  /** namespaceId */
  namespaceId?: string;

  /** 查询条件：name */
  name?: string;

  /** 查询条件：描述信息 */
  description?: string;

  /** 查询条件：project instanceId */
  projectInstanceId?: string;
}

export interface ContractCenterApi_ListApiContractResponseBody {
  /** 契约列表 */
  data?: ContractCenterApi_ListApiContractResponseBody_data_item[];
}

/**
 * @description api契约列表
 * @endpoint GET /api/v1/contract/api
 */
export const ContractCenterApi_listApiContract = async (
  params: ContractCenterApi_ListApiContractRequestParams,
  options?: HttpOptions
): Promise<ContractCenterApi_ListApiContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.ListApiContract@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ContractCenterApi_ListApiContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.ListApiContract/api/v1/contract/api",
      { ...options, params }
    )
  ).data;

export interface ContractCenterApi_ListApiContractResponseBody_data_item {
  /** 实例id */
  instanceId?: string;

  /** 命名空间 */
  namespaceId?: string;

  /** 契约name */
  name?: string;

  /** 契约描述 */
  description?: string;

  /** 契约关联的project, 一个契约可关联多个项目 */
  projects?: ModelFlowBuilderApiContract["projects"];

  /** 单个契约的最新版本 */
  latestVersion?: string;
}
