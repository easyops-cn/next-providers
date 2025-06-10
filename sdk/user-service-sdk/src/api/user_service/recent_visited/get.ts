import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RecentVisitedApi_GetRequestParams {
  /** 最近访问keys,多个key逗号隔开 */
  keys: string;
}

export type RecentVisitedApi_GetResponseBody = Record<string, any>;

/**
 * @description 获取最近访问数据
 * @endpoint GET /api/v1/user_services/users/:userId/recent_visited
 */
export const RecentVisitedApi_get = async (
  userId: string | number,
  params: RecentVisitedApi_GetRequestParams,
  options?: HttpOptions
): Promise<RecentVisitedApi_GetResponseBody> =>
  /**! @contract easyops.api.user_service.recent_visited.Get@1.0.0 */ (
    await http.get<ResponseBodyWrapper<RecentVisitedApi_GetResponseBody>>(
      `api/gateway/logic.user_service/api/v1/user_services/users/${userId}/recent_visited`,
      { ...options, params }
    )
  ).data;
