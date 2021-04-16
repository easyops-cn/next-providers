import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InheritanceApi_SearchInstanceAuthorizersRequestBody {
  /** 查询条件 */
  query: Record<string, any>;

  /** 筛选字段, 不支持 * */
  fields: string[];

  /** 页数 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

export interface InheritanceApi_SearchInstanceAuthorizersResponseBody {
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
export const InheritanceApi_searchInstanceAuthorizers = async (
  objectId: string | number,
  data: InheritanceApi_SearchInstanceAuthorizersRequestBody,
  options?: HttpOptions
): Promise<InheritanceApi_SearchInstanceAuthorizersResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.SearchInstanceAuthorizers */ (
    await http.post<
      ResponseBodyWrapper<InheritanceApi_SearchInstanceAuthorizersResponseBody>
    >(
      `api/gateway/permission.inheritance.SearchInstanceAuthorizers/object/${objectId}/instance/search/authorizers`,
      data,
      options
    )
  ).data;
