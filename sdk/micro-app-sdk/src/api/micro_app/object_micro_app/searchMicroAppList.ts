import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SearchMicroAppListRequestBody {
  /** 页码 */
  page?: number;

  /** 每页大小 */
  page_size?: number;

  /** 查询条件 */
  query?: SearchMicroAppListRequestBody_query;
}

export interface SearchMicroAppListResponseBody {
  /** 返回总数 */
  total: number;

  /** 页数 */
  page: number;

  /** 该页大小 */
  page_size: number;

  /** 数据列表 */
  list: Partial<ModelObjectMicroApp>[];
}

/**
 * @description 搜索模型查询关联小产品列表
 * @endpoint POST /api/micro_app/v1/object_micro_app/search
 */
export const searchMicroAppList = async (
  data: SearchMicroAppListRequestBody,
  options?: HttpOptions
): Promise<SearchMicroAppListResponseBody> =>
  /**! @contract easyops.api.micro_app.object_micro_app.SearchMicroAppList */ (
    await http.post<ResponseBodyWrapper<SearchMicroAppListResponseBody>>(
      "api/gateway/micro_app.object_micro_app.SearchMicroAppList/api/micro_app/v1/object_micro_app/search",
      data,
      options
    )
  ).data;

export interface SearchMicroAppListRequestBody_query {
  /** 按objectId列表查询 */
  objectId?: string[];
}
