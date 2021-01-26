import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface AggregateCountRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

export interface AggregateCountResponseItem {
  /** 个数 */
  count: number;

  /** 属性值 */
  attr: Record<string, any>;
}

export type AggregateCountResponseBody = ResponseListWrapper<AggregateCountResponseItem>;

/**
 * @description 实例计数统计
 * @endpoint LIST /object/:objectId/instance/aggregate/count/:attrId
 */
export const aggregateCount = async (
  objectId: string | number,
  attrId: string | number,
  params: AggregateCountRequestParams,
  options?: HttpOptions
): Promise<AggregateCountResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<AggregateCountResponseBody>>(
      `api/gateway/cmdb.instance.AggregateCount/object/${objectId}/instance/aggregate/count/${attrId}`,
      { ...options, params }
    )
  ).data;
