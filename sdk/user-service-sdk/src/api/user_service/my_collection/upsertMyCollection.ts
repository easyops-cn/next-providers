import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMyCollection } from "../../../model/user_service";

export type MyCollectionApi_UpsertMyCollectionRequestBody =
  Partial<ModelMyCollection>;

/**
 * @description 更新/新增我的收藏，这个接口用于全量更新单实例
 * @endpoint POST /api/v1/user_service/my_collection/upsert_collections
 */
export const MyCollectionApi_upsertMyCollection = (
  data: MyCollectionApi_UpsertMyCollectionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.my_collection.UpsertMyCollection@1.0.0 */ http.post<void>(
    "api/gateway/user_service.my_collection.UpsertMyCollection/api/v1/user_service/my_collection/upsert_collections",
    data,
    options
  );
