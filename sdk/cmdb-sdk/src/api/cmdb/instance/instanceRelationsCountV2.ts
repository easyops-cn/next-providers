import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_InstanceRelationsCountV2RequestBody {
  /** 实例ID列表 */
  instance_ids: string[];
}

export type InstanceApi_InstanceRelationsCountV2ResponseBody = Record<
  string,
  any
>;

/**
 * @description 多个实例关系统计 (对于APP会额外返回其集群下所有主机的数量(_clusters_deviceList))
 * @endpoint POST /v2/object/:object_id/instance/_relation_count
 */
export const InstanceApi_instanceRelationsCountV2 = async (
  object_id: string | number,
  data: InstanceApi_InstanceRelationsCountV2RequestBody,
  options?: HttpOptions
): Promise<InstanceApi_InstanceRelationsCountV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.InstanceRelationsCountV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_InstanceRelationsCountV2ResponseBody>
    >(
      `api/gateway/cmdb.instance.InstanceRelationsCountV2/v2/object/${object_id}/instance/_relation_count`,
      data,
      options
    )
  ).data;
