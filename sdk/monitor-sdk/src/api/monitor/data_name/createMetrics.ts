import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMetrics } from "../../../model/monitor";

export type DataNameApi_CreateMetricsRequestBody = Partial<ModelMetrics>;

export interface DataNameApi_CreateMetricsResponseBody {
  /** 返回码 */
  code: number;

  /** 返回信息 */
  msg: string;

  /** 结果 */
  data: DataNameApi_CreateMetricsResponseBody_data;
}

/**
 * @description 创建采集指标
 * @endpoint POST /api/v1/collector/general_config
 */
export const DataNameApi_createMetrics = (
  data: DataNameApi_CreateMetricsRequestBody,
  options?: HttpOptions
): Promise<DataNameApi_CreateMetricsResponseBody> =>
  /**! @contract easyops.api.monitor.data_name.CreateMetrics@1.0.0 */ http.post<DataNameApi_CreateMetricsResponseBody>(
    "api/gateway/monitor.data_name.CreateMetrics/api/v1/collector/general_config",
    data,
    options
  );

export interface DataNameApi_CreateMetricsResponseBody_data {
  /** Metrics _id */
  id?: string;
}
