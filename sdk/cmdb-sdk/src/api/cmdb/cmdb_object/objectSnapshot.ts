import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectSnapshotRequestParams {
  /** 版本号(-1表示查询最新版本) */
  _version: number;
}

export type ObjectSnapshotResponseBody = Partial<ModelCmdbObject> &
  ObjectSnapshotResponseBody_2;

/**
 * @description 查询指定版本模型快照
 * @endpoint GET /history/object/:object_id
 */
export const objectSnapshot = async (
  object_id: string | number,
  params: ObjectSnapshotRequestParams,
  options?: HttpOptions
): Promise<ObjectSnapshotResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ObjectSnapshotResponseBody>>(
      `api/gateway/cmdb.cmdb_object.ObjectSnapshot/history/object/${object_id}`,
      { ...options, params }
    )
  ).data;

export interface ObjectSnapshotResponseBody_2 {
  /** 快照ID */
  _id?: string;
}
