import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FulltextSearchRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 搜索关键字 */
  keyword?: string;

  /** 资源模型Id */
  object_id?: string;

  /** 默认前缀搜索,true/false */
  prefixSearch?: "true" | "false";
}

export interface FulltextSearchResponseBody {
  /** 实例数据 */
  list: Record<string, any>[];

  /** 实例总数 */
  total: number;

  /** 页码 */
  page: number;

  /** 页大小 */
  page_size: number;

  /** 模型实例统计数据,如:{"HOST": 10, "APP": 5} */
  count: Record<string, any>;
}

/**
 * @description 全文搜索
 * @endpoint GET /fulltext/_search
 */
export const fulltextSearch = async (
  params: FulltextSearchRequestParams,
  options?: HttpOptions
): Promise<FulltextSearchResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<FulltextSearchResponseBody>>(
      "api/gateway/cmdb.instance.FulltextSearch/fulltext/_search",
      { ...options, params }
    )
  ).data;
