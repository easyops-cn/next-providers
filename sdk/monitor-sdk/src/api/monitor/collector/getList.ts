import { http, HttpOptions } from "@next-core/brick-http";

/** 支持动态构造请求参数进行通用查询，具体如下：
  1. 默认查询为精确查询，如
      /collector/list/host?ip=1.1.1.1&page=1&page_size=10000
  2. 支持两种范式的in查询，如
      /collector/list/host?ip__in=1.1.1.1,1.1.1.2&page=1&page_size=10000
      /collector/list/host?ip__in=1.1.1.1&ip__in=1.1.1.2&page=1&page_size=10000
  3. 支持模糊查询，如
      /collector/list/host?ip__like=1.1.1.&page=1&page_size=10000
  4. 支持不等于查询，如
      /collector/list/host?ip__ne=1.1.1.3&page=1&page_size=10000
  5. 支持大于查询，如
      /collector/list/host?create_time__gt=1111111&page=1&page_size=10000
  6. 支持小于查询，如
      /collector/list/host?create_time__lt=2222222&page=1&page_size=10000
  7. 支持between查询，如
      /collector/list/host?create_time__between=1111111,2222222&page=1&page_size=10000
  8. 支持或查询，如
      /collector/list/host?ip__like|disabled__eq=1.1.1.,0&page=1&page_size=10000#ip为1.1.1.0/24网段或者disabled等于0
 */
export interface CollectorApi_GetListRequestParams {
  /** 指定查询的指标名 */
  __select__?: string[];

  /** 指定分组字段 */
  __groupby__?: string;

  /** 开始时间 */
  st?: string;

  /** 结束时间 */
  et?: string;

  /** 时间范围 */
  timerange?: string;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

export interface CollectorApi_GetListResponseBody {
  /** 返回码 */
  code: number;

  /** 消息 */
  msg: string;

  /** 数据 */
  data: Record<string, any>[];

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 总数 */
  total?: number;
}

/**
 * @description 获取指标数据
 * @endpoint GET /api/v1/collector/list/:table
 */
export const CollectorApi_getList = (
  table: string | number,
  params: CollectorApi_GetListRequestParams,
  options?: HttpOptions
): Promise<CollectorApi_GetListResponseBody> =>
  /**! @contract easyops.api.monitor.collector.GetList */ http.get<CollectorApi_GetListResponseBody>(
    `api/gateway/monitor.collector.GetList/api/v1/collector/list/${table}`,
    { ...options, params }
  );
