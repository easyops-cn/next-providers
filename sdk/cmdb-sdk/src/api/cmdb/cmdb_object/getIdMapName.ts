import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_GetIdMapNameRequestParams {
  /** 模型Id, 使用,分隔 */
  objectIds?: string;

  /** system */
  system?: string;

  /** 分类 */
  category?: string;

  /** system是否为空，为true时会忽略参数system */
  emptySystem?: boolean;
}

export type CmdbObjectApi_GetIdMapNameResponseBody = Record<string, any>;

/**
 * @description 获取模型id和name映射
 * @endpoint GET /object_id_map_name
 */
export const CmdbObjectApi_getIdMapName = async (
  params: CmdbObjectApi_GetIdMapNameRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_GetIdMapNameResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetIdMapName@1.0.0 */ (
    await http.get<ResponseBodyWrapper<CmdbObjectApi_GetIdMapNameResponseBody>>(
      "api/gateway/cmdb.cmdb_object.GetIdMapName/object_id_map_name",
      { ...options, params }
    )
  ).data;
