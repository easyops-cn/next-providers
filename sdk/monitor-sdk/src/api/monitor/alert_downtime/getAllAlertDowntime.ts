import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertDowntime } from "../../../model/monitor";

export interface AlertDowntimeApi_GetAllAlertDowntimeRequestParams {
  /** 规则id, 多个用逗号分隔符 */
  alert_rule_id__in?: string;
}

export interface AlertDowntimeApi_GetAllAlertDowntimeResponseBody {
  /** code */
  code?: number;

  /** 分页大小 */
  page_size?: number;

  /** 页数 */
  page?: number;

  /** 总数 */
  total?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: Partial<ModelAlertDowntime>[];
}

/**
 * @description 获取告警屏蔽规则列表
 * @endpoint GET /api/v1/alert_downtime/config
 */
export const AlertDowntimeApi_getAllAlertDowntime = (
  params: AlertDowntimeApi_GetAllAlertDowntimeRequestParams,
  options?: HttpOptions
): Promise<AlertDowntimeApi_GetAllAlertDowntimeResponseBody> =>
  /**! @contract easyops.api.monitor.alert_downtime.GetAllAlertDowntime@1.0.0 */ http.get<AlertDowntimeApi_GetAllAlertDowntimeResponseBody>(
    "api/gateway/monitor.alert_downtime.GetAllAlertDowntime/api/v1/alert_downtime/config",
    { ...options, params }
  );
