import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetIdMapNameRequestParams {
  /** 模型Id, 使用,分隔 */
  objectIds?: string;

  /** system */
  system?: string;

  /** 分类 */
  category?: string;

  /** system是否为空，为true时会忽略参数system */
  emptySystem?: boolean;
}

export type GetIdMapNameResponseBody = Record<string, any>;

/**
 * @description 获取模型id和name映射
 * @endpoint GET /object_id_map_name
 */
export const getIdMapName = async (
  params: GetIdMapNameRequestParams,
  options?: HttpOptions
): Promise<GetIdMapNameResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetIdMapName */ (
    await http.get<ResponseBodyWrapper<GetIdMapNameResponseBody>>(
      "api/gateway/cmdb.cmdb_object.GetIdMapName/object_id_map_name",
      { ...options, params }
    )
  ).data;
