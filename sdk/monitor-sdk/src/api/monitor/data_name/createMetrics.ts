import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMetrics } from "../../../model/monitor";

export type CreateMetricsRequestBody = Partial<ModelMetrics>;

export interface CreateMetricsResponseBody {
  /** 返回码 */
  code: number;

  /** 返回信息 */
  msg: string;

  /** 结果 */
  data: CreateMetricsResponseBody_data;
}

/**
 * @description 创建采集指标
 * @endpoint POST /api/v1/collector/general_config
 */
export const createMetrics = (
  data: CreateMetricsRequestBody,
  options?: HttpOptions
): Promise<CreateMetricsResponseBody> =>
  /**! @contract easyops.api.monitor.data_name.CreateMetrics */ http.post<CreateMetricsResponseBody>(
    "api/gateway/monitor.data_name.CreateMetrics/api/v1/collector/general_config",
    data,
    options
  );

export interface CreateMetricsResponseBody_data {
  /** Metrics _id */
  id?: string;
}
