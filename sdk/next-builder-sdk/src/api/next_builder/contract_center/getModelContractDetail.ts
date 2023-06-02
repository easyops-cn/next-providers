import { http, HttpOptions } from "@next-core/brick-http";
import { ModelModelContract } from "../../../model/flow_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type ContractCenterApi_GetModelContractDetailResponseBody =
  Partial<ModelModelContract>;

/**
 * @description model契约详情展示
 * @endpoint GET /api/v1/contract/model/:instanceId
 */
export const ContractCenterApi_getModelContractDetail = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ContractCenterApi_GetModelContractDetailResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.GetModelContractDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ContractCenterApi_GetModelContractDetailResponseBody>
    >(
      `api/gateway/next_builder.contract_center.GetModelContractDetail/api/v1/contract/model/${instanceId}`,
      options
    )
  ).data;
