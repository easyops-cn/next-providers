import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SearchInstalledMicroAppRequestBody {
  /** 页码 */
  page?: number;

  /** 每页大小 */
  page_size?: number;

  /** 查询条件 */
  query?: SearchInstalledMicroAppRequestBody_query;
}

export interface SearchInstalledMicroAppResponseBody {
  /** 返回总数 */
  total: number;

  /** 页数 */
  page: number;

  /** 该页大小 */
  page_size: number;

  /** 数据列表 */
  list: Partial<ModelInstalledMicroApp>[];
}

/**
 * @description 获取小产品列表
 * @endpoint POST /api/micro_app/v1/installed_micro_app/search
 */
export const searchInstalledMicroApp = async (
  data: SearchInstalledMicroAppRequestBody,
  options?: HttpOptions
): Promise<SearchInstalledMicroAppResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<SearchInstalledMicroAppResponseBody>>(
      "api/gateway/micro_app.installed_micro_app.SearchInstalledMicroApp/api/micro_app/v1/installed_micro_app/search",
      data,
      options
    )
  ).data;

export interface SearchInstalledMicroAppRequestBody_query {
  /** 按name或appId搜索,%xx%:模糊匹配,xx%:前缀匹配 */
  key?: string;

  /** 是否过滤内部小产品 */
  filterInternal?: boolean;
}
