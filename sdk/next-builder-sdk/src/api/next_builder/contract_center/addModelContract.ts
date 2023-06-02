import { http, HttpOptions } from "@next-core/brick-http";
import { ModelModelContract } from "../../../model/flow_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

/** model契约请求 */
export type ContractCenterApi_AddModelContractRequestBody =
  Partial<ModelModelContract> & ModelModelContract_partial;

export interface ContractCenterApi_AddModelContractResponseBody {
  /** instance_id */
  modelContractInstanceId?: string;
}

/**
 * @description 添加model契约接口
 * @endpoint POST /api/v1/contract/model
 */
export const ContractCenterApi_addModelContract = async (
  data: ContractCenterApi_AddModelContractRequestBody,
  options?: HttpOptions
): Promise<ContractCenterApi_AddModelContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.AddModelContract@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ContractCenterApi_AddModelContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.AddModelContract/api/v1/contract/model",
      data,
      options
    )
  ).data;

export interface ModelModelContract_partial {
  /** name */
  name: string;

  /** namespaceId */
  namespaceId: string;
}
