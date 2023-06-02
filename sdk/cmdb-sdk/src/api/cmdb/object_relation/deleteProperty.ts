import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type ObjectRelationApi_DeletePropertyResponseBody =
  Partial<ModelObjectAttr>;

/**
 * @description 删除关系属性定义
 * @endpoint DELETE /object_relation/attr/:relation_id/:attr_id
 */
export const ObjectRelationApi_deleteProperty = async (
  relation_id: string | number,
  attr_id: string | number,
  options?: HttpOptions
): Promise<ObjectRelationApi_DeletePropertyResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.DeleteProperty@1.0.0 */ (
    await http.delete<
      ResponseBodyWrapper<ObjectRelationApi_DeletePropertyResponseBody>
    >(
      `api/gateway/cmdb.object_relation.DeleteProperty/object_relation/attr/${relation_id}/${attr_id}`,
      options
    )
  ).data;
