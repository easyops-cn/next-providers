import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface HistoryApi_RollbackInstanceRequestBody {
  /** 实例版本号 */
  _version: number;

  /** 实例变更的操作时间 */
  _ts: any;
}

export type HistoryApi_RollbackInstanceResponseBody = Record<string, any>;

/**
 * @description 实例回滚
 * @endpoint PUT /object/:objectId/instance/:instanceId/_rollback
 */
export const HistoryApi_rollbackInstance = async (
  objectId: string | number,
  instanceId: string | number,
  data: HistoryApi_RollbackInstanceRequestBody,
  options?: HttpOptions
): Promise<HistoryApi_RollbackInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.history.RollbackInstance */ (
    await http.put<
      ResponseBodyWrapper<HistoryApi_RollbackInstanceResponseBody>
    >(
      `api/gateway/cmdb.history.RollbackInstance/object/${objectId}/instance/${instanceId}/_rollback`,
      data,
      options
    )
  ).data;
