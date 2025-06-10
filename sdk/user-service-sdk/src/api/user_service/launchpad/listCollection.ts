import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadCollection } from "../../../model/user_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface LaunchpadApi_ListCollectionRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface LaunchpadApi_ListCollectionResponseItem {
  /** LaunchpadCollection */
  launchpadCollection?: Partial<ModelLaunchpadCollection>;

  /** microApp Id, 当type为microApp时有该字段 */
  microAppId?: string;
}

export type LaunchpadApi_ListCollectionResponseBody =
  ResponseListWrapper<LaunchpadApi_ListCollectionResponseItem>;

/**
 * @description 获取我的收藏列表
 * @endpoint LIST /api/v1/launchpad/collection
 */
export const LaunchpadApi_listCollection = async (
  params: LaunchpadApi_ListCollectionRequestParams,
  options?: HttpOptions
): Promise<LaunchpadApi_ListCollectionResponseBody> =>
  /**! @contract easyops.api.user_service.launchpad.ListCollection@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<LaunchpadApi_ListCollectionResponseBody>
    >("api/gateway/logic.user_service/api/v1/launchpad/collection", {
      ...options,
      params,
    })
  ).data;
