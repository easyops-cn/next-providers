import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface HistoryApi_BatchRollbackInstanceEditResponseBody {
  /** 成功回滚的实例数量 */
  success?: number;

  /** 总共需要更新数量 */
  updateCount?: number;

  /** 错误信息 */
  failDetails?: HistoryApi_BatchRollbackInstanceEditResponseBody_failDetails_item[];
}

/**
 * @description 回滚单次批量操作的全部编辑实例
 * @endpoint PUT /object/instance/batch/_rollback/:parent_event_id/edit
 */
export const HistoryApi_batchRollbackInstanceEdit = async (
  parent_event_id: string | number,
  options?: HttpOptions
): Promise<HistoryApi_BatchRollbackInstanceEditResponseBody> =>
  /**! @contract easyops.api.cmdb.history.BatchRollbackInstanceEdit@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<HistoryApi_BatchRollbackInstanceEditResponseBody>
    >(
      `api/gateway/cmdb.history.BatchRollbackInstanceEdit/object/instance/batch/_rollback/${parent_event_id}/edit`,
      undefined,
      options
    )
  ).data;

export interface HistoryApi_BatchRollbackInstanceEditResponseBody_failDetails_item {
  /** 模型id */
  objectId?: string;

  /** 模型名 */
  objectName?: string;

  /** 失败原因 */
  errMsg?: string;
}
