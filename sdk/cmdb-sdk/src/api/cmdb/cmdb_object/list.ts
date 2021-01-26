import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface ListRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;
}

export type ListResponseItem = Partial<ModelCmdbObject>;

export type ListResponseBody = ResponseListWrapper<ListResponseItem>;

/**
 * @description 获取模型列表
 * @endpoint LIST /object
 */
export const list = async (
  params: ListRequestParams,
  options?: HttpOptions
): Promise<ListResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListResponseBody>>(
      "api/gateway/cmdb.cmdb_object.List/object",
      { ...options, params }
    )
  ).data;