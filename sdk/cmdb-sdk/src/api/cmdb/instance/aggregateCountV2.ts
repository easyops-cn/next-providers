import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AggregateCountV2RequestParams {
  /** top n, 默认300, 为0则获取所有, top n+1以后的属性值将会聚合追加到最后,属性值为'-' */
  top?: number;
}

export type AggregateCountV2ResponseBody = AggregateCountV2ResponseBody_item[];

/**
 * @description 实例计数统计接口v2 (实例计数统计,不分页)
 * @endpoint GET /v2/object/:objectId/instance_aggregate/count/:attrId
 */
export const aggregateCountV2 = async (
  objectId: string | number,
  attrId: string | number,
  params: AggregateCountV2RequestParams,
  options?: HttpOptions
): Promise<AggregateCountV2ResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<AggregateCountV2ResponseBody>>(
      `api/gateway/cmdb.instance.AggregateCountV2/v2/object/${objectId}/instance_aggregate/count/${attrId}`,
      { ...options, params }
    )
  ).data;

export interface AggregateCountV2ResponseBody_item {
  /** 个数 */
  count: number;

  /** 属性值 */
  attr: Record<string, any>;
}
