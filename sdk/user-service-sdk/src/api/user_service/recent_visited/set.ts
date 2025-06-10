import { http, HttpOptions } from "@next-core/brick-http";

export interface RecentVisitedApi_SetRequestBody {
  /** 标识最近访问或者过滤标签 */
  type?: string;

  /** 最近访问列表 */
  data: RecentVisitedApi_SetRequestBody_data;
}

/**
 * @description 保存最近访问数据
 * @endpoint POST /api/v1/user_services/users/:userId/recent_visited
 */
export const RecentVisitedApi_set = (
  userId: string | number,
  data: RecentVisitedApi_SetRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.recent_visited.Set@1.0.0 */ http.post<void>(
    `api/gateway/logic.user_service/api/v1/user_services/users/${userId}/recent_visited`,
    data,
    options
  );

export interface RecentVisitedApi_SetRequestBody_data {
  /** key */
  key?: string;

  /** value */
  value?: RecentVisitedApi_SetRequestBody_data_value_item[];
}

export interface RecentVisitedApi_SetRequestBody_data_value_item {
  /** 访问实例ID */
  visitObjectId?: string;

  /** 访问实例名称 */
  visitObjectName?: string;

  /** 访问时间 */
  visitedAt?: string;

  /** 访问次数 */
  count?: number;
}
