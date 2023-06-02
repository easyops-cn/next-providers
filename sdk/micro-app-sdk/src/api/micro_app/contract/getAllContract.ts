import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 请求消息体 */
export interface ContractApi_GetAllContractRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** 指定返回字段, e.g.: [name, instanceId] */
  fields?: string[];
}

export interface ContractApi_GetAllContractResponseBody {
  /** instance list */
  list?: Record<string, any>[];
}

/**
 * @description 拉取所有契约(模型：_INTERFACE_CONTRACT@EASYOPS)
 * @endpoint POST /api/v1/flow-builder/get_all_contract
 */
export const ContractApi_getAllContract = async (
  data: ContractApi_GetAllContractRequestBody,
  options?: HttpOptions
): Promise<ContractApi_GetAllContractResponseBody> =>
  /**! @contract easyops.api.micro_app.contract.GetAllContract@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ContractApi_GetAllContractResponseBody>
    >(
      "api/gateway/micro_app.contract.GetAllContract/api/v1/flow-builder/get_all_contract",
      data,
      options
    )
  ).data;
