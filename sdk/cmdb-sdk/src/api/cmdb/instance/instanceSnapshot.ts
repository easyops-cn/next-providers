import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_InstanceSnapshotRequestParams {
  /** 版本号 */
  _version: number;

  /** 操作时间 */
  _ts: number;
}

export type InstanceApi_InstanceSnapshotResponseBody = Record<string, any>;

/**
 * @description 查询指定版本实例快照
 * @endpoint GET /history/object/:object_id/instance/:instance_id
 */
export const InstanceApi_instanceSnapshot = async (
  object_id: string | number,
  instance_id: string | number,
  params: InstanceApi_InstanceSnapshotRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_InstanceSnapshotResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.InstanceSnapshot@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_InstanceSnapshotResponseBody>
    >(
      `api/gateway/cmdb.instance.InstanceSnapshot/history/object/${object_id}/instance/${instance_id}`,
      { ...options, params }
    )
  ).data;
