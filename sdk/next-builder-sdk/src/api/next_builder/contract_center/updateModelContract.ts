import { http, HttpOptions } from "@next-core/brick-http";
import { ModelModelContract } from "../../../model/flow_builder";

/** api模型 */
export type ContractCenterApi_UpdateModelContractRequestBody =
  Partial<ModelModelContract> & ModelModelContract_partial_2;

/**
 * @description 更新model接口
 * @endpoint PUT /api/v1/model/:instanceId
 */
export const ContractCenterApi_updateModelContract = (
  instanceId: string | number,
  data: ContractCenterApi_UpdateModelContractRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.contract_center.UpdateModelContract@1.0.0 */ http.put<void>(
    `api/gateway/next_builder.contract_center.UpdateModelContract/api/v1/model/${instanceId}`,
    data,
    options
  );

export interface ModelModelContract_partial_2 {
  /** name */
  name: string;

  /** namespaceId */
  namespaceId: string;
}
