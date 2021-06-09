import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_AggregateCountRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

export interface InstanceApi_AggregateCountResponseItem {
  /** 个数 */
  count: number;

  /** 属性值 */
  attr: Record<string, any>;
}

export type InstanceApi_AggregateCountResponseBody =
  ResponseListWrapper<InstanceApi_AggregateCountResponseItem>;

/**
 * @description 实例计数统计
 * @endpoint LIST /object/:objectId/instance/aggregate/count/:attrId
 */
export const InstanceApi_aggregateCount = async (
  objectId: string | number,
  attrId: string | number,
  params: InstanceApi_AggregateCountRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_AggregateCountResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.AggregateCount */ (
    await http.get<ResponseBodyWrapper<InstanceApi_AggregateCountResponseBody>>(
      `api/gateway/cmdb.instance.AggregateCount/object/${objectId}/instance/aggregate/count/${attrId}`,
      { ...options, params }
    )
  ).data;
