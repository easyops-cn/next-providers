import { http, HttpOptions } from "@next-core/brick-http";

export interface CmdbObjectApi_CollectRequestBody {
  /** 模型id列表 */
  objectIdList: string[];

  /** 是否收藏 */
  isCollect: boolean;
}

/**
 * @description 收藏或者取消收藏模型
 * @endpoint POST /object/collect
 */
export const CmdbObjectApi_collect = (
  data: CmdbObjectApi_CollectRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.cmdb_object.Collect@1.0.0 */ http.post<void>(
    "api/gateway/cmdb.cmdb_object.Collect/object/collect",
    data,
    options
  );
