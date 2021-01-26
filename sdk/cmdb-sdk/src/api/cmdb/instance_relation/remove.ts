import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceRelationRequest } from "../../../model/cmdb";

export type RemoveRequestBody = Partial<ModelInstanceRelationRequest>;

/**
 * @description 批量移除关系
 * @endpoint POST /object/:objectId/relation/:relationSideId/remove
 */
export const remove = (
  objectId: string | number,
  relationSideId: string | number,
  data: RemoveRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    `api/gateway/cmdb.instance_relation.Remove/object/${objectId}/relation/${relationSideId}/remove`,
    data,
    options
  );
