import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除模型关系分组
 * @endpoint DELETE /object/:object_id/relation_group/:id
 */
export const ObjectRelationApi_deleteRelationGroup = (
  object_id: string | number,
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.object_relation.DeleteRelationGroup@1.0.0 */ http.delete<void>(
    `api/gateway/cmdb.object_relation.DeleteRelationGroup/object/${object_id}/relation_group/${id}`,
    options
  );
