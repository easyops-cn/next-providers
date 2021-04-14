import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceSnapshotRequestParams {
  /** 版本号 */
  _version: number;

  /** 操作时间 */
  _ts: number;
}

export type InstanceSnapshotResponseBody = Record<string, any>;

/**
 * @description 查询指定版本实例快照
 * @endpoint GET /history/object/:object_id/instance/:instance_id
 */
export const instanceSnapshot = async (
  object_id: string | number,
  instance_id: string | number,
  params: InstanceSnapshotRequestParams,
  options?: HttpOptions
): Promise<InstanceSnapshotResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.InstanceSnapshot */ (
    await http.get<ResponseBodyWrapper<InstanceSnapshotResponseBody>>(
      `api/gateway/cmdb.instance.InstanceSnapshot/history/object/${object_id}/instance/${instance_id}`,
      { ...options, params }
    )
  ).data;
