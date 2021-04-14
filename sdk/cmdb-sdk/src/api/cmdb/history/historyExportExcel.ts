import { http, HttpOptions } from "@next-core/brick-http";

export interface HistoryExportExcelRequestParams {
  /** 模型Id */
  object_id?: string;

  /** 实例ID */
  instanceId?: string;

  /** 操作人 */
  operator?: string;

  /** 事件名称 */
  event?: string;

  /** 排除事件名称 */
  exclude_event?: string;

  /** 父事件id */
  parent_event_id?: string;

  /** range */
  range?: string;

  /** st */
  st?: string;

  /** et */
  et?: string;

  /** 是否查询子事件（true查询子事件，false不查询子时间，默认false) */
  with_children?: boolean;

  /** 是否新站点，用于导出详情链接 */
  is_next?: boolean;

  /** 导出链接的模式，1-老console 2-旧next环境 3-新next环境，此值为空时以is_next为准 */
  url_mode?: number;
}

/**
 * @description 变更记录导出excel接口
 * @endpoint GET /history/export/excel
 */
export const historyExportExcel = (
  params: HistoryExportExcelRequestParams,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.history.HistoryExportExcel */ http.get<Blob>(
    "api/gateway/cmdb.history.HistoryExportExcel/history/export/excel",
    { ...options, params, responseType: "blob" }
  );
