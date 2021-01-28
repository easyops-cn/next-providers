import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SearchInstanceAuthorizersRequestBody {
  /** 查询条件 */
  query: Record<string, any>;

  /** 筛选字段, 不支持 * */
  fields: string[];

  /** 页数 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

export interface SearchInstanceAuthorizersResponseBody {
  /** instance list */
  list?: Record<string, any>[];

  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

/**
 * @description 搜索实例的白名单
 * @endpoint POST /object/:objectId/instance/search/authorizers
 */
export const searchInstanceAuthorizers = async (
  objectId: string | number,
  data: SearchInstanceAuthorizersRequestBody,
  options?: HttpOptions
): Promise<SearchInstanceAuthorizersResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<SearchInstanceAuthorizersResponseBody>>(
      `api/gateway/permission.inheritance.SearchInstanceAuthorizers/object/${objectId}/instance/search/authorizers`,
      data,
      options
    )
  ).data;
