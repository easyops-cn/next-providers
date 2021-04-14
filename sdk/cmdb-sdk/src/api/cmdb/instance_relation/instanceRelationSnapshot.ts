import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceRelationSnapshotRequestParams {
  /** 操作时间 */
  _ts: number;
}

export interface InstanceRelationSnapshotResponseBody {
  /** 快照ID */
  _id?: string;

  /** 左端实例数据 */
  _left_instance?: InstanceRelationSnapshotResponseBody__left_instance;

  /** 操作类型 */
  _operation?: string;

  /** 操作用户 */
  _operator?: string;

  /** 关系ID */
  _relation_id?: string;

  /** 右端实例数据 */
  _right_instance?: InstanceRelationSnapshotResponseBody__right_instance;

  /** 操作时间 */
  _ts?: number;

  /** 版本号 */
  _version?: number;

  /** 左端实例ID */
  left_instance_id?: string;

  /** 右端实例ID */
  right_instance_id?: string;

  /** 关系实例ID */
  relation_instance_id?: string;
}

/**
 * @description 查询历史实例关系快照
 * @endpoint GET /history/object_relation/:relation_id/relation_instance/:relation_instance_id
 */
export const instanceRelationSnapshot = async (
  relation_id: string | number,
  relation_instance_id: string | number,
  params: InstanceRelationSnapshotRequestParams,
  options?: HttpOptions
): Promise<InstanceRelationSnapshotResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.InstanceRelationSnapshot */ (
    await http.get<ResponseBodyWrapper<InstanceRelationSnapshotResponseBody>>(
      `api/gateway/cmdb.instance_relation.InstanceRelationSnapshot/history/object_relation/${relation_id}/relation_instance/${relation_instance_id}`,
      { ...options, params }
    )
  ).data;

export interface InstanceRelationSnapshotResponseBody__left_instance {
  /** 实例ID */
  instanceId?: string;

  /** 主机名 */
  hostname?: string;

  /** 实例名称 */
  name?: string;

  /** 模型ID */
  _object_id?: string;

  /** 实例版本号 */
  _version?: number;
}

export interface InstanceRelationSnapshotResponseBody__right_instance {
  /** 实例ID */
  instanceId?: string;

  /** 主机名 */
  hostname?: string;

  /** 实例名称 */
  name?: string;

  /** 模型ID */
  _object_id?: string;

  /** 实例版本号 */
  _version?: number;
}
