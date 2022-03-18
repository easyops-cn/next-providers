import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFlowBuilderApiContract } from "../../../model/flow_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

/** interface契约请求 */
export type ContractCenterApi_AddApiContractRequestBody =
  Partial<ModelFlowBuilderApiContract> & ModelFlowBuilderApiContract_partial;

export interface ContractCenterApi_AddApiContractResponseBody {
  /** instance_id */
  apiContractInstanceId?: string;
}

/**
 * @description 添加api契约接口
 * @endpoint POST /api/v1/contract/api
 */
export const ContractCenterApi_addApiContract = async (
  data: ContractCenterApi_AddApiContractRequestBody,
  options?: HttpOptions
): Promise<ContractCenterApi_AddApiContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.AddApiContract@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ContractCenterApi_AddApiContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.AddApiContract/api/v1/contract/api",
      data,
      options
    )
  ).data;

export interface ModelFlowBuilderApiContract_partial {
  /** 契约name */
  name: string;

  /** version */
  version: string;

  /** 命名空间 */
  namespaceId: string;

  /** 契约描述 */
  description: string;
}
