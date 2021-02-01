import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMetrics } from "../../../model/monitor";

export interface ListMetricsRequestParams {
  /** 页数 */
  page?: number;

  /** 分页大小 */
  page_size?: number;
}

export interface ListMetricsResponseBody {
  /** 返回码 */
  code: number;

  /** 返回信息 */
  msg: string;

  /** 总数 */
  total: number;

  /** 页码 */
  page: number;

  /** 分页大小 */
  page_size: number;

  /** 翻译规则列表 */
  data: Partial<ModelMetrics>[];
}

/**
 * @description 获取指标表列表
 * @endpoint GET /api/v1/collector/general_config
 */
export const listMetrics = (
  params: ListMetricsRequestParams,
  options?: HttpOptions
): Promise<ListMetricsResponseBody> =>
  http.get<ListMetricsResponseBody>(
    "api/gateway/monitor.data_name.ListMetrics/api/v1/collector/general_config",
    { ...options, params }
  );
