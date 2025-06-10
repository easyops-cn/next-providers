import { http, HttpOptions } from "@next-core/brick-http";

export interface LaunchpadApi_SortCollectionRequestBody {
  /** launchpad instanceId列表 */
  list?: string[];
}

/**
 * @description 我的收藏排序
 * @endpoint POST /api/v1/launchpad/sort-collection
 */
export const LaunchpadApi_sortCollection = (
  data: LaunchpadApi_SortCollectionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.launchpad.SortCollection@1.0.0 */ http.post<void>(
    "api/gateway/logic.user_service/api/v1/launchpad/sort-collection",
    data,
    options
  );
