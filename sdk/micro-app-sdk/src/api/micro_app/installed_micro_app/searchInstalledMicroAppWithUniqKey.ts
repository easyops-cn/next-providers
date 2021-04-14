import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SearchInstalledMicroAppWithUniqKeyRequestBody {
  /** 页码 */
  page?: number;

  /** 每页大小 */
  page_size?: number;

  /** 查询条件 */
  query?: SearchInstalledMicroAppWithUniqKeyRequestBody_query;
}

export interface SearchInstalledMicroAppWithUniqKeyResponseBody {
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
 * @description 按唯一key(name,appId,homepage)搜索小产品列表
 * @endpoint POST /api/micro_app/v1/installed_micro_app/search/uniq_key
 */
export const searchInstalledMicroAppWithUniqKey = async (
  data: SearchInstalledMicroAppWithUniqKeyRequestBody,
  options?: HttpOptions
): Promise<SearchInstalledMicroAppWithUniqKeyResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.SearchInstalledMicroAppWithUniqKey */ (
    await http.post<
      ResponseBodyWrapper<SearchInstalledMicroAppWithUniqKeyResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.SearchInstalledMicroAppWithUniqKey/api/micro_app/v1/installed_micro_app/search/uniq_key",
      data,
      options
    )
  ).data;

export interface SearchInstalledMicroAppWithUniqKeyRequestBody_query {
  /** app name */
  name?: string;

  /** appid */
  app_id?: string;

  /** homepage */
  homepage?: string;
}
