import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceRelationRequest } from "../../../model/cmdb";

export type InstanceRelationApi_RemoveRequestBody =
  Partial<ModelInstanceRelationRequest>;

/**
 * @description 批量移除关系
 * @endpoint POST /object/:objectId/relation/:relationSideId/remove
 */
export const InstanceRelationApi_remove = (
  objectId: string | number,
  relationSideId: string | number,
  data: InstanceRelationApi_RemoveRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_relation.Remove@1.0.0 */ http.post<void>(
    `api/gateway/cmdb.instance_relation.Remove/object/${objectId}/relation/${relationSideId}/remove`,
    data,
    options
  );
