import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFlowBuilderApiContract } from "../../../model/flow_builder";

/** api接口请求 */
export type ContractCenterApi_UpdateApiContractRequestBody =
  Partial<ModelFlowBuilderApiContract> &
    ContractCenterApi_UpdateApiContractRequestBody_2;

/**
 * @description 更新api契约接口
 * @endpoint PUT /api/v1/api/:instanceId
 */
export const ContractCenterApi_updateApiContract = (
  instanceId: string | number,
  data: ContractCenterApi_UpdateApiContractRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.contract_center.UpdateApiContract@1.0.0 */ http.put<void>(
    `api/gateway/next_builder.contract_center.UpdateApiContract/api/v1/api/${instanceId}`,
    data,
    options
  );

export interface ContractCenterApi_UpdateApiContractRequestBody_2 {
  /** 契约关联的project */
  projectInstanceId?: string;
}
