import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RollbackInstanceRequestBody {
  /** 实例版本号 */
  _version: number;

  /** 实例变更的操作时间 */
  _ts: any;
}

export type RollbackInstanceResponseBody = Record<string, any>;

/**
 * @description 实例回滚
 * @endpoint PUT /object/:objectId/instance/:instanceId/_rollback
 */
export const rollbackInstance = async (
  objectId: string | number,
  instanceId: string | number,
  data: RollbackInstanceRequestBody,
  options?: HttpOptions
): Promise<RollbackInstanceResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<RollbackInstanceResponseBody>>(
      `api/gateway/cmdb.history.RollbackInstance/object/${objectId}/instance/${instanceId}/_rollback`,
      data,
      options
    )
  ).data;
