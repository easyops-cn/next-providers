import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的实例 */
export type InstanceApi_UpdateInstanceRequestBody = Record<string, any>;

export type InstanceApi_UpdateInstanceResponseBody = Record<string, any>;

/**
 * @description 更新实例
 * @endpoint PUT /object/:objectId/instance/:instanceId
 */
export const InstanceApi_updateInstance = async (
  objectId: string | number,
  instanceId: string | number,
  data: InstanceApi_UpdateInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_UpdateInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpdateInstance@1.0.0 */ (
    await http.put<ResponseBodyWrapper<InstanceApi_UpdateInstanceResponseBody>>(
      `api/gateway/cmdb.instance.UpdateInstance/object/${objectId}/instance/${instanceId}`,
      data,
      options
    )
  ).data;
