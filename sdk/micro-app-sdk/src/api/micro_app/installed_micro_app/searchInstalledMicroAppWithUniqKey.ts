import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_SearchInstalledMicroAppWithUniqKeyRequestBody {
  /** 页码 */
  page?: number;

  /** 每页大小 */
  page_size?: number;

  /** 查询条件 */
  query?: InstalledMicroAppApi_SearchInstalledMicroAppWithUniqKeyRequestBody_query;
}

export interface InstalledMicroAppApi_SearchInstalledMicroAppWithUniqKeyResponseBody {
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
export const InstalledMicroAppApi_searchInstalledMicroAppWithUniqKey = async (
  data: InstalledMicroAppApi_SearchInstalledMicroAppWithUniqKeyRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_SearchInstalledMicroAppWithUniqKeyResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.SearchInstalledMicroAppWithUniqKey@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_SearchInstalledMicroAppWithUniqKeyResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.SearchInstalledMicroAppWithUniqKey/api/micro_app/v1/installed_micro_app/search/uniq_key",
      data,
      options
    )
  ).data;

export interface InstalledMicroAppApi_SearchInstalledMicroAppWithUniqKeyRequestBody_query {
  /** app name */
  name?: string;

  /** appid */
  app_id?: string;

  /** homepage */
  homepage?: string;
}
