import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceApi_RelationCountAggregateRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query: Record<string, any>;

  /** 关系sideId,例如APP的owner */
  relation_side_ids: string[];

  /** 当为 true 时，只搜索与我相关实例 */
  only_my_instance: boolean;
}

export interface InstanceApi_RelationCountAggregateResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 关系数量统计结果 */
  data: InstanceApi_RelationCountAggregateResponseBody_data_item[];
}

/**
 * @description 实例关系数量统计
 * @endpoint POST /object/:objectId/instance/_relation_count_aggregate
 */
export const InstanceApi_relationCountAggregate = (
  objectId: string | number,
  data: InstanceApi_RelationCountAggregateRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_RelationCountAggregateResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.RelationCountAggregate@1.0.0 */ http.post<InstanceApi_RelationCountAggregateResponseBody>(
    `api/gateway/cmdb.instance.RelationCountAggregate/object/${objectId}/instance/_relation_count_aggregate`,
    data,
    options
  );

export interface InstanceApi_RelationCountAggregateResponseBody_data_item {
  /** 关系sideId */
  key?: string;

  /** 关系个数 */
  value?: number;
}
