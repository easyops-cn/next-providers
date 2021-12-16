import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_AggregateCountV2RequestParams {
  /** top n, 默认300, 为0则获取所有, top n+1以后的属性值将会聚合追加到最后,属性值为'-' */
  top?: number;
}

export type InstanceApi_AggregateCountV2ResponseBody =
  InstanceApi_AggregateCountV2ResponseBody_item[];

/**
 * @description 实例计数统计接口v2 (实例计数统计,不分页)
 * @endpoint GET /v2/object/:objectId/instance_aggregate/count/:attrId
 */
export const InstanceApi_aggregateCountV2 = async (
  objectId: string | number,
  attrId: string | number,
  params: InstanceApi_AggregateCountV2RequestParams,
  options?: HttpOptions
): Promise<InstanceApi_AggregateCountV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.AggregateCountV2@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_AggregateCountV2ResponseBody>
    >(
      `api/gateway/cmdb.instance.AggregateCountV2/v2/object/${objectId}/instance_aggregate/count/${attrId}`,
      { ...options, params }
    )
  ).data;

export interface InstanceApi_AggregateCountV2ResponseBody_item {
  /** 个数 */
  count: number;

  /** 属性值 */
  attr: Record<string, any>;
}
