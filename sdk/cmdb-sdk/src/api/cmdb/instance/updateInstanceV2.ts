import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的实例 */
export type InstanceApi_UpdateInstanceV2RequestBody = Record<string, any>;

export type InstanceApi_UpdateInstanceV2ResponseBody = Record<string, any>;

/**
 * @description 更新实例V2 (支持关系更新)
 * @endpoint PUT /v2/object/:objectId/instance/:instanceId
 */
export const InstanceApi_updateInstanceV2 = async (
  objectId: string | number,
  instanceId: string | number,
  data: InstanceApi_UpdateInstanceV2RequestBody,
  options?: HttpOptions
): Promise<InstanceApi_UpdateInstanceV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpdateInstanceV2@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<InstanceApi_UpdateInstanceV2ResponseBody>
    >(
      `api/gateway/cmdb.instance.UpdateInstanceV2/v2/object/${objectId}/instance/${instanceId}`,
      data,
      options
    )
  ).data;
