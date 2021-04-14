import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRange } from "../../../model/monitor";

export interface ListAlertRangeRequestParams {
  /** 告警事件Id */
  key?: string;
}

export interface ListAlertRangeResponseBody {
  /** 返回码 */
  code?: number;

  /** 消息 */
  msg?: string;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 总数 */
  total?: number;

  /** 数据列表 */
  data?: Partial<ModelAlertRange>[];
}

/**
 * @description 获取告警状态列表
 * @endpoint GET /api/v1/alert_range
 */
export const listAlertRange = (
  params: ListAlertRangeRequestParams,
  options?: HttpOptions
): Promise<ListAlertRangeResponseBody> =>
  /**! @contract easyops.api.monitor.alert.ListAlertRange */ http.get<ListAlertRangeResponseBody>(
    "api/gateway/monitor.alert.ListAlertRange/api/v1/alert_range",
    { ...options, params }
  );
