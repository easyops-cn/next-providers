import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_SearchInstalledMicroAppRequestBody {
  /** 页码 */
  page?: number;

  /** 每页大小 */
  page_size?: number;

  /** 查询条件 */
  query?: InstalledMicroAppApi_SearchInstalledMicroAppRequestBody_query;
}

export interface InstalledMicroAppApi_SearchInstalledMicroAppResponseBody {
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
export const InstalledMicroAppApi_searchInstalledMicroApp = async (
  data: InstalledMicroAppApi_SearchInstalledMicroAppRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_SearchInstalledMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.SearchInstalledMicroApp@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_SearchInstalledMicroAppResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.SearchInstalledMicroApp/api/micro_app/v1/installed_micro_app/search",
      data,
      options
    )
  ).data;

export interface InstalledMicroAppApi_SearchInstalledMicroAppRequestBody_query {
  /** 按name或appId搜索,%xx%:模糊匹配,xx%:前缀匹配 */
  key?: string;

  /** 是否过滤内部小产品 */
  filterInternal?: boolean;
}
