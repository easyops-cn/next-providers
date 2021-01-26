import { http, HttpOptions } from "@next-core/brick-http";

export interface SortCollectionRequestBody {
  /** launchpad instanceId列表 */
  list?: string[];
}

/**
 * @description 我的收藏排序
 * @endpoint POST /api/v1/launchpad/sort-collection
 */
export const sortCollection = (
  data: SortCollectionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/user_service.launchpad.SortCollection/api/v1/launchpad/sort-collection",
    data,
    options
  );
