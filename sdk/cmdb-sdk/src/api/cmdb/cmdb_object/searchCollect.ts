import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_SearchCollectResponseBody {
  /** 模型id列表 */
  objectIdList?: string[];
}

/**
 * @description 查询收藏的模型
 * @endpoint GET /object/search_collect
 */
export const CmdbObjectApi_searchCollect = async (
  options?: HttpOptions
): Promise<CmdbObjectApi_SearchCollectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.search_collect@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<CmdbObjectApi_SearchCollectResponseBody>
    >(
      "api/gateway/cmdb.cmdb_object.search_collect/object/search_collect",
      options
    )
  ).data;
