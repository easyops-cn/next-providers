import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMyCollection } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface MyCollectionApi_ListMyCollectionRequestParams {
  /** 产品模块 */
  module: string;

  /** 收藏名称 */
  collectionName: string;
}

export type MyCollectionApi_ListMyCollectionResponseBody =
  Partial<ModelMyCollection>;

/**
 * @description 获取我的收藏列表
 * @endpoint GET /api/v1/user_service/my_collection/collections
 */
export const MyCollectionApi_listMyCollection = async (
  params: MyCollectionApi_ListMyCollectionRequestParams,
  options?: HttpOptions
): Promise<MyCollectionApi_ListMyCollectionResponseBody> =>
  /**! @contract easyops.api.user_service.my_collection.ListMyCollection@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<MyCollectionApi_ListMyCollectionResponseBody>
    >(
      "api/gateway/logic.user_service/api/v1/user_service/my_collection/collections",
      { ...options, params }
    )
  ).data;
