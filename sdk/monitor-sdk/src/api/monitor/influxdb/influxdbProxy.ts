import { http, HttpOptions } from "@next-core/brick-http";

export interface InfluxdbApi_InfluxdbProxyRequestParams {
  /** 数据库 */
  db: string;

  /** SQL语句 */
  q: string;

  /** 返回时间戳的精度 */
  epoch: "w" | "d" | "h" | "m" | "s" | "ms" | "u" | "ns";
}

export interface InfluxdbApi_InfluxdbProxyResponseBody {
  /** 返回的数据 */
  results?: InfluxdbApi_InfluxdbProxyResponseBody_results_item[];
}

/**
 * @description influxdb数据获取
 * @endpoint GET /api/v1/influxdb/proxy/query
 */
export const InfluxdbApi_influxdbProxy = (
  params: InfluxdbApi_InfluxdbProxyRequestParams,
  options?: HttpOptions
): Promise<InfluxdbApi_InfluxdbProxyResponseBody> =>
  /**! @contract easyops.api.monitor.influxdb.InfluxdbProxy@1.0.0 */ http.get<InfluxdbApi_InfluxdbProxyResponseBody>(
    "api/gateway/monitor.influxdb.InfluxdbProxy/api/v1/influxdb/proxy/query",
    { ...options, params }
  );

export interface InfluxdbApi_InfluxdbProxyResponseBody_results_item {
  /** series */
  series?: InfluxdbApi_InfluxdbProxyResponseBody_results_item_series_item[];

  /** error */
  error?: string;

  /** statement_id */
  statement_id?: number;
}

export interface InfluxdbApi_InfluxdbProxyResponseBody_results_item_series_item {
  /** 指标值（是一个二维表），根据sql不同而不同，他的列在columns标明 */
  values?: any;

  /** 表名 */
  name?: string;

  /** 列名 */
  columns?: string[];

  /** tags */
  tags?: Record<string, any>;
}
