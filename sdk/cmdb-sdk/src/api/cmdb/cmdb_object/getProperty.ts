import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectAttr } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetPropertyResponseBody = Partial<ModelObjectAttr>;

/**
 * @description 获取模型属性
 * @endpoint GET /object/:objectId/attr/:attrId
 */
export const getProperty = async (
  objectId: string | number,
  attrId: string | number,
  options?: HttpOptions
): Promise<GetPropertyResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetPropertyResponseBody>>(
      `api/gateway/cmdb.cmdb_object.GetProperty/object/${objectId}/attr/${attrId}`,
      options
    )
  ).data;
