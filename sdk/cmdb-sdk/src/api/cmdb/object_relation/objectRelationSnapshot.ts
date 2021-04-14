import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelation } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectRelationSnapshotRequestParams {
  /** 版本号(-1表示查询最新版本) */
  _version: number;
}

export type ObjectRelationSnapshotResponseBody = Partial<ModelObjectRelation> &
  ObjectRelationSnapshotResponseBody_2;

/**
 * @description 查询指定版本模型关系快照
 * @endpoint GET /history/object_relation/:relation_id
 */
export const objectRelationSnapshot = async (
  relation_id: string | number,
  params: ObjectRelationSnapshotRequestParams,
  options?: HttpOptions
): Promise<ObjectRelationSnapshotResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.ObjectRelationSnapshot */ (
    await http.get<ResponseBodyWrapper<ObjectRelationSnapshotResponseBody>>(
      `api/gateway/cmdb.object_relation.ObjectRelationSnapshot/history/object_relation/${relation_id}`,
      { ...options, params }
    )
  ).data;

export interface ObjectRelationSnapshotResponseBody_2 {
  /** 快照ID */
  _id?: string;
}
