import { http, HttpOptions } from "@next-core/brick-http";

export interface RelationCountAggregateRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query: Record<string, any>;

  /** 关系sideId,例如APP的owner */
  relation_side_ids: string[];

  /** 当为 true 时，只搜索与我相关实例 */
  only_my_instance: boolean;
}

export interface RelationCountAggregateResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 关系数量统计结果 */
  data: RelationCountAggregateResponseBody_data_item[];
}

/**
 * @description 实例关系数量统计
 * @endpoint POST /object/:objectId/instance/_relation_count_aggregate
 */
export const relationCountAggregate = (
  objectId: string | number,
  data: RelationCountAggregateRequestBody,
  options?: HttpOptions
): Promise<RelationCountAggregateResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.RelationCountAggregate */ http.post<RelationCountAggregateResponseBody>(
    `api/gateway/cmdb.instance.RelationCountAggregate/object/${objectId}/instance/_relation_count_aggregate`,
    data,
    options
  );

export interface RelationCountAggregateResponseBody_data_item {
  /** 关系sideId */
  key?: string;

  /** 关系个数 */
  value?: number;
}
