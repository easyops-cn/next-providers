import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InstanceApi_InstanceRelationsCountResponseBody = Record<
  string,
  any
>;

/**
 * @description 单个实例关系统计 (对于APP会额外返回其集群下所有主机的数量(_clusters_deviceList))
 * @endpoint GET /object/:object_id/instance/:instance_id/_relation_count
 */
export const InstanceApi_instanceRelationsCount = async (
  object_id: string | number,
  instance_id: string | number,
  options?: HttpOptions
): Promise<InstanceApi_InstanceRelationsCountResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.InstanceRelationsCount */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_InstanceRelationsCountResponseBody>
    >(
      `api/gateway/cmdb.instance.InstanceRelationsCount/object/${object_id}/instance/${instance_id}/_relation_count`,
      options
    )
  ).data;
