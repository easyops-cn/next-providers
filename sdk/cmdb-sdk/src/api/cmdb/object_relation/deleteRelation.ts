import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除模型关系定义
 * @endpoint DELETE /object_relation/:relation_id
 */
export const ObjectRelationApi_deleteRelation = (
  relation_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.object_relation.DeleteRelation */ http.delete<void>(
    `api/gateway/cmdb.object_relation.DeleteRelation/object_relation/${relation_id}`,
    options
  );
