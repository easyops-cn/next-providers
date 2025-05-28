import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_SearchMicroAppCategoryRequestBody {
  /** 查询字段 */
  fields: string[];

  /** 查询条件 */
  query?: Record<string, any>;

  /** 查询类型 */
  appType: "scenario" | "solution";

  /** 分页页码 */
  page?: number;

  /** 分页大小 */
  pageSize?: number;
}

export interface OpenPlatformApi_SearchMicroAppCategoryResponseBody {
  /** 查询结果 */
  list?: Record<string, any>[];
}

/**
 * @description 查询微应用分类及微应用
 * @endpoint POST /api/v1/open_platform/micro_app/category/search
 */
export const OpenPlatformApi_searchMicroAppCategory = async (
  data: OpenPlatformApi_SearchMicroAppCategoryRequestBody,
  options?: HttpOptions
): Promise<OpenPlatformApi_SearchMicroAppCategoryResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.SearchMicroAppCategory@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<OpenPlatformApi_SearchMicroAppCategoryResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/micro_app/category/search",
      data,
      options
    )
  ).data;
