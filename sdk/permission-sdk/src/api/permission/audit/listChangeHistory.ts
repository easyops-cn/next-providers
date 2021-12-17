import { http, HttpOptions } from "@next-core/brick-http";
import { ModelChangeHistory } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuditApi_ListChangeHistoryRequestBody {
  /** 页码 */
  page: number;

  /** 页大小 */
  pageSize: number;

  /** 操作过滤条件 */
  operation?: string[];

  /** 执行用户过滤条件 */
  operator?: string;

  /** 变更摘要过滤条件 */
  detail?: string;

  /** 起始时间，支持时间戳和now-1d语义 */
  from?: string;

  /** 终止时间，支持时间戳和now-1d语义 */
  to?: string;

  /** 操作结果 */
  status?: "success" | "fail";
}

export interface AuditApi_ListChangeHistoryResponseBody {
  /** 页码 */
  page: number;

  /** 页大小 */
  pageSize: number;

  /** 总数 */
  total: number;

  /** 变更历史列表 */
  list: Partial<ModelChangeHistory>[];
}

/**
 * @description 获取变更历史
 * @endpoint POST /api/v1/audit/change_history
 */
export const AuditApi_listChangeHistory = async (
  data: AuditApi_ListChangeHistoryRequestBody,
  options?: HttpOptions
): Promise<AuditApi_ListChangeHistoryResponseBody> =>
  /**! @contract easyops.api.permission.audit.ListChangeHistory@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AuditApi_ListChangeHistoryResponseBody>
    >(
      "api/gateway/permission.audit.ListChangeHistory/api/v1/audit/change_history",
      data,
      options
    )
  ).data;
