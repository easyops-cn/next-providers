import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelMeasure,
  ModelFilter,
  ModelOrder,
  ModelHaving,
} from "../../../model/data_exchange";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OlapApi_GetRouteMinLoadTimeRequestBody {
  /** 1. dataSource 为 cmdb 时， model 为 "cmdb.model"
2. dataSource 为 clickhouse 时， model 为 "库名.表名"
 */
  model: string;

  /** 聚合的维度 */
  dims: string[];

  /** 指标聚合计算规则 */
  measures: Partial<ModelMeasure>[];

  /** 过滤条件 */
  filters: Partial<ModelFilter>[];

  /** 指定字段排序, 数组是有顺序，哪个字段在前，先按哪个字段排序 */
  order?: Partial<ModelOrder>[];

  /** having过滤 */
  having?: Partial<ModelHaving>[];
}

export interface OlapApi_GetRouteMinLoadTimeResponseBody {
  /** 总数 */
  total: number;

  /** 统计后的数据 */
  list: Record<string, any>[];
}

/**
 * @description 查询routeId最小加载时间
 * @endpoint POST /api/v1/next_builder/olap/:instanceId
 */
export const OlapApi_getRouteMinLoadTime = async (
  instanceId: string | number,
  data: OlapApi_GetRouteMinLoadTimeRequestBody,
  options?: HttpOptions
): Promise<OlapApi_GetRouteMinLoadTimeResponseBody> =>
  /**! @contract easyops.api.next_builder.olap.GetRouteMinLoadTime@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<OlapApi_GetRouteMinLoadTimeResponseBody>
    >(
      `api/gateway/next_builder.olap.GetRouteMinLoadTime/api/v1/next_builder/olap/${instanceId}`,
      data,
      options
    )
  ).data;
