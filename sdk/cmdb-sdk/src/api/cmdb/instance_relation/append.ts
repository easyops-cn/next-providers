import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceRelationRequest } from "../../../model/cmdb";

export type AppendRequestBody = Partial<ModelInstanceRelationRequest>;

/**
 * @description 批量添加关系
 * @endpoint POST /object/:objectId/relation/:relationSideId/append
 */
export const append = (
  objectId: string | number,
  relationSideId: string | number,
  data: AppendRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    `api/gateway/cmdb.instance_relation.Append/object/${objectId}/relation/${relationSideId}/append`,
    data,
    options
  );
