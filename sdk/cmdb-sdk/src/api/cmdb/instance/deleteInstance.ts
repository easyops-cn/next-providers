import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface DeleteInstanceRequestParams {
  /** 是否只返回实例id */
  only_instance_id?: boolean;
}

export type DeleteInstanceResponseBody = Record<string, any>;

/**
 * @description 删除实例
 * @endpoint DELETE /object/:objectId/instance/:instanceId
 */
export const deleteInstance = async (
  objectId: string | number,
  instanceId: string | number,
  params: DeleteInstanceRequestParams,
  options?: HttpOptions
): Promise<DeleteInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.DeleteInstance */ (
    await http.delete<ResponseBodyWrapper<DeleteInstanceResponseBody>>(
      `api/gateway/cmdb.instance.DeleteInstance/object/${objectId}/instance/${instanceId}`,
      { ...options, params }
    )
  ).data;
