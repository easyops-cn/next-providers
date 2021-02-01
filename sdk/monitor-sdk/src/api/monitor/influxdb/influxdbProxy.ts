import { http, HttpOptions } from "@next-core/brick-http";

export interface InfluxdbProxyRequestParams {
  /** 数据库 */
  db: string;

  /** SQL语句 */
  q: string;

  /** 返回时间戳的精度 */
  epoch: "w" | "d" | "h" | "m" | "s" | "ms" | "u" | "ns";
}

export interface InfluxdbProxyResponseBody {
  /** 返回的数据 */
  results?: InfluxdbProxyResponseBody_results_item[];
}

/**
 * @description influxdb数据获取
 * @endpoint GET /api/v1/influxdb/proxy/query
 */
export const influxdbProxy = (
  params: InfluxdbProxyRequestParams,
  options?: HttpOptions
): Promise<InfluxdbProxyResponseBody> =>
  http.get<InfluxdbProxyResponseBody>(
    "api/gateway/monitor.influxdb.InfluxdbProxy/api/v1/influxdb/proxy/query",
    { ...options, params }
  );

export interface InfluxdbProxyResponseBody_results_item {
  /** series */
  series?: InfluxdbProxyResponseBody_results_item_series_item[];

  /** error */
  error?: string;

  /** statement_id */
  statement_id?: number;
}

export interface InfluxdbProxyResponseBody_results_item_series_item {
  /** 指标值（是一个二维表），根据sql不同而不同，他的列在columns标明 */
  values?: any;

  /** 表名 */
  name?: string;

  /** 列名 */
  columns?: string[];

  /** tags */
  tags?: Record<string, any>;
}
