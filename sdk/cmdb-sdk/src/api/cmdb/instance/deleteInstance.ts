import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_DeleteInstanceRequestParams {
  /** 是否只返回实例id */
  only_instance_id?: boolean;
}

export type InstanceApi_DeleteInstanceResponseBody = Record<string, any>;

/**
 * @description 删除实例
 * @endpoint DELETE /object/:objectId/instance/:instanceId
 */
export const InstanceApi_deleteInstance = async (
  objectId: string | number,
  instanceId: string | number,
  params: InstanceApi_DeleteInstanceRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_DeleteInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.DeleteInstance@1.0.0 */ (
    await http.delete<
      ResponseBodyWrapper<InstanceApi_DeleteInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance.DeleteInstance/object/${objectId}/instance/${instanceId}`,
      { ...options, params }
    )
  ).data;
