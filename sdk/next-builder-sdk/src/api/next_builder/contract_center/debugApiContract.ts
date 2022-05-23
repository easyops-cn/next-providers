import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractCenterApi_DebugApiContractRequestBody {
  /** 开发环境 */
  developmentEnv?: ModelMicroAppProject["developmentEnv"];

  /** method */
  method?: string;

  /** uri example */
  uri?: string;

  /** headers */
  headers?: Record<string, any>;

  /** file */
  file?: File[];

  /** 契约调试数据 */
  data?: string;

  /** 服务名字 */
  serviceName?: string;
}

export interface ContractCenterApi_DebugApiContractResponseBody {
  /** file */
  file?: File[];

  /** 契约调试数据 */
  data?: string;

  /** headers */
  headers?: Record<string, any>;

  /** statusCode */
  statusCode?: number;
}

/**
 * @description api契约调试
 * @endpoint POST /api/v1/contract/debug
 */
export const ContractCenterApi_debugApiContract = async (
  data: ContractCenterApi_DebugApiContractRequestBody,
  options?: HttpOptions
): Promise<ContractCenterApi_DebugApiContractResponseBody> => {
  /**! @contract easyops.api.next_builder.contract_center.DebugApiContract@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return (
    await http.post<
      ResponseBodyWrapper<ContractCenterApi_DebugApiContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.DebugApiContract/api/v1/contract/debug",
      _formData,
      options
    )
  ).data;
};
