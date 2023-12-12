import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 以父模型id为key的map */
export type CmdbObjectApi_BatchListChildObjectResponseBody = Record<
  string,
  any
>;

/**
 * @description 批量获取模型所有关联子模型
 * @endpoint POST /object/batch/child
 */
export const CmdbObjectApi_batchListChildObject = async (
  options?: HttpOptions
): Promise<CmdbObjectApi_BatchListChildObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.BatchListChildObject@1.0.2 */ (
    await http.post<
      ResponseBodyWrapper<CmdbObjectApi_BatchListChildObjectResponseBody>
    >(
      "api/gateway/cmdb.cmdb_object.BatchListChildObject/object/batch/child",
      undefined,
      options
    )
  ).data;
