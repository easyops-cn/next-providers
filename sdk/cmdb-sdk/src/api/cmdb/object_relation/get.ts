import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelation } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type ObjectRelationApi_GetResponseBody = Partial<ModelObjectRelation>;

/**
 * @description 获取单个模型关系
 * @endpoint GET /object_relation/:relation_id
 */
export const ObjectRelationApi_get = async (
  relation_id: string | number,
  options?: HttpOptions
): Promise<ObjectRelationApi_GetResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.Get@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ObjectRelationApi_GetResponseBody>>(
      `api/gateway/cmdb.object_relation.Get/object_relation/${relation_id}`,
      options
    )
  ).data;
