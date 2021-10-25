import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ContractApi_SearchSingleContractRequestBody {
  /** 契约名字 */
  name: string;

  /** 契约命名空间 */
  namespace: string;

  /** 契约版本 */
  version: string;
}

export interface ContractApi_SearchSingleContractResponseBody {
  /** contract instance */
  list?: Record<string, any>;
}

/**
 * @description 通过defaultOrg查找单个契约信息
 * @endpoint POST /contract/single_search
 */
export const ContractApi_searchSingleContract = async (
  data: ContractApi_SearchSingleContractRequestBody,
  options?: HttpOptions
): Promise<ContractApi_SearchSingleContractResponseBody> =>
  /**! @contract easyops.api.api_gateway.contract.SearchSingleContract */ (
    await http.post<
      ResponseBodyWrapper<ContractApi_SearchSingleContractResponseBody>
    >("contract/single_search", data, options)
  ).data;
