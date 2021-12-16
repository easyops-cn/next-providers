import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除查询策略v2
 * @endpoint DELETE /v2/object/:object_id/relation_query_strategy/:id
 */
export const CmdbObjectApi_deleteRelationQueryStrategyV2 = (
  object_id: string | number,
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.cmdb_object.DeleteRelationQueryStrategyV2@2.0.0 */ http.delete<void>(
    `api/gateway/cmdb.cmdb_object.DeleteRelationQueryStrategyV2/v2/object/${object_id}/relation_query_strategy/${id}`,
    options
  );
