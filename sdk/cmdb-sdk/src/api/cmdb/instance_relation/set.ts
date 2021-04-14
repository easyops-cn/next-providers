import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceRelationRequest } from "../../../model/cmdb";

export type SetRequestBody = Partial<ModelInstanceRelationRequest>;

/**
 * @description 批量设置关系
 * @endpoint POST /object/:objectId/relation/:relationSideId/set
 */
export const set = (
  objectId: string | number,
  relationSideId: string | number,
  data: SetRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_relation.Set */ http.post<void>(
    `api/gateway/cmdb.instance_relation.Set/object/${objectId}/relation/${relationSideId}/set`,
    data,
    options
  );
