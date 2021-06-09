import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_ObjectSnapshotRequestParams {
  /** 版本号(-1表示查询最新版本) */
  _version: number;
}

export type CmdbObjectApi_ObjectSnapshotResponseBody =
  Partial<ModelCmdbObject> & CmdbObjectApi_ObjectSnapshotResponseBody_2;

/**
 * @description 查询指定版本模型快照
 * @endpoint GET /history/object/:object_id
 */
export const CmdbObjectApi_objectSnapshot = async (
  object_id: string | number,
  params: CmdbObjectApi_ObjectSnapshotRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ObjectSnapshotResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ObjectSnapshot */ (
    await http.get<
      ResponseBodyWrapper<CmdbObjectApi_ObjectSnapshotResponseBody>
    >(
      `api/gateway/cmdb.cmdb_object.ObjectSnapshot/history/object/${object_id}`,
      { ...options, params }
    )
  ).data;

export interface CmdbObjectApi_ObjectSnapshotResponseBody_2 {
  /** 快照ID */
  _id?: string;
}
