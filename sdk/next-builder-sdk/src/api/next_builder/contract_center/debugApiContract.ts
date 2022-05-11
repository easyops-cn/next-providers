import { http, HttpOptions } from "@next-core/brick-http";
import { ModelContractExample } from "../../../model/flow_builder";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractCenterApi_DebugApiContractRequestBody {
  /** 开发环境 */
  developmentEnv?: ModelMicroAppProject["developmentEnv"];

  /** request example */
  request?: ModelContractExample["request"];
}

export interface ContractCenterApi_DebugApiContractResponseBody {
  /** response example */
  response?: ModelContractExample["response"];
}

/**
 * @description api契约调试
 * @endpoint POST /api/v1/contract/debug
 */
export const ContractCenterApi_debugApiContract = async (
  data: ContractCenterApi_DebugApiContractRequestBody,
  options?: HttpOptions
): Promise<ContractCenterApi_DebugApiContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.DebugApiContract@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ContractCenterApi_DebugApiContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.DebugApiContract/api/v1/contract/debug",
      data,
      options
    )
  ).data;
