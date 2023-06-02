import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceRelationRequest } from "../../../model/cmdb";

export type InstanceRelationApi_AppendRequestBody =
  Partial<ModelInstanceRelationRequest>;

/**
 * @description 批量添加关系
 * @endpoint POST /object/:objectId/relation/:relationSideId/append
 */
export const InstanceRelationApi_append = (
  objectId: string | number,
  relationSideId: string | number,
  data: InstanceRelationApi_AppendRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_relation.Append@1.1.0 */ http.post<void>(
    `api/gateway/cmdb.instance_relation.Append/object/${objectId}/relation/${relationSideId}/append`,
    data,
    options
  );
