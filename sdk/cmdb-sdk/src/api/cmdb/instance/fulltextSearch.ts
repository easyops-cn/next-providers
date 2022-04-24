import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_FulltextSearchRequestParams {
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

  /** 是否使用模糊匹配模式 */
  no_regex?: boolean;
}

export interface InstanceApi_FulltextSearchResponseBody {
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
export const InstanceApi_fulltextSearch = async (
  params: InstanceApi_FulltextSearchRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_FulltextSearchResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.FulltextSearch@1.0.0 */ (
    await http.get<ResponseBodyWrapper<InstanceApi_FulltextSearchResponseBody>>(
      "api/gateway/cmdb.instance.FulltextSearch/fulltext/_search",
      { ...options, params }
    )
  ).data;
