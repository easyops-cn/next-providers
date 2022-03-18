import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFlowBuilderApiContract } from "../../../model/flow_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type ContractCenterApi_GetApiContractDetailResponseBody =
  Partial<ModelFlowBuilderApiContract>;

/**
 * @description api契约详情展示
 * @endpoint GET /api/v1/contract/api/:instanceId
 */
export const ContractCenterApi_getApiContractDetail = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ContractCenterApi_GetApiContractDetailResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.GetApiContractDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ContractCenterApi_GetApiContractDetailResponseBody>
    >(
      `api/gateway/next_builder.contract_center.GetApiContractDetail/api/v1/contract/api/${instanceId}`,
      options
    )
  ).data;
