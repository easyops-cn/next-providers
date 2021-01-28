import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbSort } from "../../../model/cmdb";
import { ModelInheritRule } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SearchRuleRequestBody {
  /** 页数 */
  page: number;

  /** 分页大小 */
  page_size: number;

  /** 搜索条件,与mongo语法一致 */
  query?: Record<string, any>;

  /** 选择返回的字段,不传则返回所有字段 */
  fields?: string[];

  /** 按字段排序， 留空默认按照实例ID降序排序(1表示升序， -1表示降序) e.g.: [{ instanceId: 1 }] */
  sort?: Partial<ModelCmdbSort>[];
}

export interface SearchRuleResponseBody {
  /** 分页大小 */
  page_size: number;

  /** 页数 */
  page: number;

  /** 总数 */
  total: number;

  /** data */
  list: Partial<ModelInheritRule>[];
}

/**
 * @description 搜索规则
 * @endpoint POST /api/v1/inherit/rule/_search
 */
export const searchRule = async (
  data: SearchRuleRequestBody,
  options?: HttpOptions
): Promise<SearchRuleResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<SearchRuleResponseBody>>(
      "api/gateway/permission.inheritance.SearchRule/api/v1/inherit/rule/_search",
      data,
      options
    )
  ).data;
