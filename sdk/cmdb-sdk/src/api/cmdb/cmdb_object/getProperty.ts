import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type CmdbObjectApi_GetPropertyResponseBody = Partial<ModelObjectAttr>;

/**
 * @description 获取模型属性
 * @endpoint GET /object/:objectId/attr/:attrId
 */
export const CmdbObjectApi_getProperty = async (
  objectId: string | number,
  attrId: string | number,
  options?: HttpOptions
): Promise<CmdbObjectApi_GetPropertyResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetProperty */ (
    await http.get<ResponseBodyWrapper<CmdbObjectApi_GetPropertyResponseBody>>(
      `api/gateway/cmdb.cmdb_object.GetProperty/object/${objectId}/attr/${attrId}`,
      options
    )
  ).data;
