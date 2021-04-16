import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除索引
 * @endpoint DELETE /object/:objectId/index/:indexName
 */
export const IndexApi_deleteIndex = (
  objectId: string | number,
  indexName: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.index.DeleteIndex */ http.delete<void>(
    `api/gateway/cmdb.index.DeleteIndex/object/${objectId}/index/${indexName}`,
    options
  );
