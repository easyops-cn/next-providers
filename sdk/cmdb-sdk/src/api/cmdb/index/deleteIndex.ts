import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除索引
 * @endpoint DELETE /object/:objectId/index/:indexName
 */
export const deleteIndex = (
  objectId: string | number,
  indexName: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/cmdb.index.DeleteIndex/object/${objectId}/index/${indexName}`,
    options
  );
