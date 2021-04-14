import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type DeletePropertyResponseBody = Partial<ModelObjectAttr>;

/**
 * @description 删除模型属性
 * @endpoint DELETE /object/:objectId/attr/:attrId
 */
export const deleteProperty = async (
  objectId: string | number,
  attrId: string | number,
  options?: HttpOptions
): Promise<DeletePropertyResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.DeleteProperty */ (
    await http.delete<ResponseBodyWrapper<DeletePropertyResponseBody>>(
      `api/gateway/cmdb.cmdb_object.DeleteProperty/object/${objectId}/attr/${attrId}`,
      options
    )
  ).data;
