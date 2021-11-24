import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSiteMap } from "../../../model/api_gateway";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SitemapApi_GetAllSiteMapResponseBody {
  /** 系统地图 */
  siteMaps?: Partial<ModelSiteMap>[];
}

/**
 * @description 获取所有系统地图信息
 * @endpoint GET /api/v1/micro-app/get_all_site_map
 */
export const SitemapApi_getAllSiteMap = async (
  options?: HttpOptions
): Promise<SitemapApi_GetAllSiteMapResponseBody> =>
  /**! @contract easyops.api.micro_app.sitemap.GetAllSiteMap@1.0.0 */ (
    await http.get<ResponseBodyWrapper<SitemapApi_GetAllSiteMapResponseBody>>(
      "api/gateway/micro_app.sitemap.GetAllSiteMap/api/v1/micro-app/get_all_site_map",
      options
    )
  ).data;
