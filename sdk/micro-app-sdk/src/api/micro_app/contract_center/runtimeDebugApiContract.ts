import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractCenterApi_RuntimeDebugApiContractRequestBody {
  /** method */
  method?: string;

  /** uri example */
  uri?: string;

  /** headers */
  headers?: Record<string, any>;

  /** files */
  files?: File[];

  /** 契约调试数据 */
  data?: string;

  /** 服务名字 */
  serviceName?: string;

  /** 上传的文件名字和转发接口中fileName的的对应 */
  fileNameMapping?: Record<string, any>;
}

export interface ContractCenterApi_RuntimeDebugApiContractResponseBody {
  /** 契约调试数据 */
  data?: string;

  /** headers */
  headers?: Record<string, any>;

  /** statusCode */
  statusCode?: number;
}

/**
 * @description api契约调试, 透传
 * @endpoint POST /api/v1/runtime/contract/debug
 */
export const ContractCenterApi_runtimeDebugApiContract = async (
  data: ContractCenterApi_RuntimeDebugApiContractRequestBody,
  options?: HttpOptions
): Promise<ContractCenterApi_RuntimeDebugApiContractResponseBody> => {
  /**! @contract easyops.api.micro_app.contract_center.RuntimeDebugApiContract@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<ContractCenterApi_RuntimeDebugApiContractResponseBody>
    >(
      "api/gateway/micro_app.contract_center.RuntimeDebugApiContract/api/v1/runtime/contract/debug",
      _formData,
      options
    )
  ).data;
};
