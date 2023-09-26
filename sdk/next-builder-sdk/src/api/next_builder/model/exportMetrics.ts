import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelCollectorAliasMetric,
  ModelMetricSet,
} from "../../../model/collector_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ModelApi_ExportMetricsRequestBody {
  /** 模型instanceIds */
  instanceIds: string[];

  /** 只包含发布模型 */
  onlyReleased?: boolean;
}

export interface ModelApi_ExportMetricsResponseBody {
  /** 映射指标列表(按模型) */
  list?: ModelApi_ExportMetricsResponseBody_list_item[];
}

/**
 * @description 导出指标
 * @endpoint POST /api/v1/model-center/metrics/export
 */
export const ModelApi_exportMetrics = async (
  data: ModelApi_ExportMetricsRequestBody,
  options?: HttpOptions
): Promise<ModelApi_ExportMetricsResponseBody> =>
  /**! @contract easyops.api.next_builder.model.ExportMetrics@1.1.2 */ (
    await http.post<ResponseBodyWrapper<ModelApi_ExportMetricsResponseBody>>(
      "api/gateway/next_builder.model.ExportMetrics/api/v1/model-center/metrics/export",
      data,
      options
    )
  ).data;

export interface ModelApi_ExportMetricsResponseBody_list_item {
  /** objectId(with namespace) */
  objectId?: string;

  /** 父模型ObjectId(with namespace) */
  parentObjectIds?: string[];

  /** 映射指标 */
  metrics?: Partial<ModelCollectorAliasMetric>[];

  /** 指标集 */
  metricSets?: Partial<ModelMetricSet>[];
}
