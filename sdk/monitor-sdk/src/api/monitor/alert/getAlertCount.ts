import { http, HttpOptions } from "@next-core/brick-http";

export interface AlertApi_GetAlertCountRequestParams {
  /** 开始时间 */
  st: number;

  /** 结束时间 */
  et?: number;

  /** 聚合粒度 */
  aggregate_interval: string;

  /** 查询的目标instanceIds(逗号分隔) */
  instanceId__in?: string;

  /** 查询的目标objectIds(逗号分隔) */
  objectId__in?: string;

  /** 查询的目标instanceId */
  instanceId?: string;

  /** 查询的目标objectId */
  objectId?: string;
}

export interface AlertApi_GetAlertCountResponseBody {
  /** 返回码 */
  code?: number;

  /** 返回消息 */
  msg?: string;

  /** 统计结果列表 */
  data?: AlertApi_GetAlertCountResponseBody_data_item[];
}

/**
 * @description 获取目标范围内的告警数量统计
 * @endpoint GET /api/v1/alert/count
 */
export const AlertApi_getAlertCount = (
  params: AlertApi_GetAlertCountRequestParams,
  options?: HttpOptions
): Promise<AlertApi_GetAlertCountResponseBody> =>
  /**! @contract easyops.api.monitor.alert.GetAlertCount@1.0.0 */ http.get<AlertApi_GetAlertCountResponseBody>(
    "api/gateway/monitor.alert.GetAlertCount/api/v1/alert/count",
    { ...options, params }
  );

export interface AlertApi_GetAlertCountResponseBody_data_item {
  /** 聚合周期告警数 */
  count?: number;

  /** 聚合周期告警ID列表 */
  ids?: string[];

  /** 聚合周期时间戳 */
  time?: number;
}
