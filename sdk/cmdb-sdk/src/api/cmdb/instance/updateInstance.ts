import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的实例 */
export type UpdateInstanceRequestBody = Record<string, any>;

export type UpdateInstanceResponseBody = Record<string, any>;

/**
 * @description 更新实例
 * @endpoint PUT /object/:objectId/instance/:instanceId
 */
export const updateInstance = async (
  objectId: string | number,
  instanceId: string | number,
  data: UpdateInstanceRequestBody,
  options?: HttpOptions
): Promise<UpdateInstanceResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdateInstanceResponseBody>>(
      `api/gateway/cmdb.instance.UpdateInstance/object/${objectId}/instance/${instanceId}`,
      data,
      options
    )
  ).data;
