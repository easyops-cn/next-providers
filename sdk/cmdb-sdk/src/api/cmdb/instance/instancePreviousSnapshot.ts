import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstancePreviousSnapshotRequestParams {
  /** 版本号 */
  _version: number;

  /** 操作时间 */
  _ts: number;
}

export type InstancePreviousSnapshotResponseBody = Record<string, any>;

/**
 * @description 查询上一个版本实例快照接口
 * @endpoint GET /history/object/:object_id/instance/:instance_id/_recent_snapshot
 */
export const instancePreviousSnapshot = async (
  object_id: string | number,
  instance_id: string | number,
  params: InstancePreviousSnapshotRequestParams,
  options?: HttpOptions
): Promise<InstancePreviousSnapshotResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.InstancePreviousSnapshot */ (
    await http.get<ResponseBodyWrapper<InstancePreviousSnapshotResponseBody>>(
      `api/gateway/cmdb.instance.InstancePreviousSnapshot/history/object/${object_id}/instance/${instance_id}/_recent_snapshot`,
      { ...options, params }
    )
  ).data;
