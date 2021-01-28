import { http, HttpOptions } from "@next-core/brick-http";
import { ModelChangeHistory } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListChangeHistoryRequestBody {
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
}

export interface ListChangeHistoryResponseBody {
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
export const listChangeHistory = async (
  data: ListChangeHistoryRequestBody,
  options?: HttpOptions
): Promise<ListChangeHistoryResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<ListChangeHistoryResponseBody>>(
      "api/gateway/permission.audit.ListChangeHistory/api/v1/audit/change_history",
      data,
      options
    )
  ).data;
