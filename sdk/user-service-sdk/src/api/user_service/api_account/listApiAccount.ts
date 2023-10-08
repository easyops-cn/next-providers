import { http, HttpOptions } from "@next-core/brick-http";
import { ModelApiCount } from "../../../model/user_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface ApiAccountApi_ListApiAccountRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数据量 */
  pageSize?: number;

  /** 模糊搜索账号名 */
  q?: string;
}

export type ApiAccountApi_ListApiAccountResponseItem = Partial<ModelApiCount>;

export type ApiAccountApi_ListApiAccountResponseBody =
  ResponseListWrapper<ApiAccountApi_ListApiAccountResponseItem>;

/**
 * @description api用户列表
 * @endpoint LIST /api/user_service/v1/api_account
 */
export const ApiAccountApi_listApiAccount = async (
  params: ApiAccountApi_ListApiAccountRequestParams,
  options?: HttpOptions
): Promise<ApiAccountApi_ListApiAccountResponseBody> =>
  /**! @contract easyops.api.user_service.api_account.ListApiAccount@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ApiAccountApi_ListApiAccountResponseBody>
    >(
      "api/gateway/user_service.api_account.ListApiAccount/api/user_service/v1/api_account",
      { ...options, params }
    )
  ).data;
