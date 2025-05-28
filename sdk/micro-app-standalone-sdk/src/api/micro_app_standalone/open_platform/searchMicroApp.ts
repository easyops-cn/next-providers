import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_SearchMicroAppRequestBody {
  /** 查询字段 */
  fields: string[];

  /** 查询条件 */
  query?: Record<string, any>;

  /** 分页页码 */
  page?: number;

  /** 分页大小 */
  pageSize?: number;
}

export interface OpenPlatformApi_SearchMicroAppResponseBody {
  /** 查询结果 */
  list?: Record<string, any>[];
}

/**
 * @description 查询微应用
 * @endpoint POST /api/v1/open_platform/micro_app/search
 */
export const OpenPlatformApi_searchMicroApp = async (
  data: OpenPlatformApi_SearchMicroAppRequestBody,
  options?: HttpOptions
): Promise<OpenPlatformApi_SearchMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.SearchMicroApp@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<OpenPlatformApi_SearchMicroAppResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/micro_app/search",
      data,
      options
    )
  ).data;
