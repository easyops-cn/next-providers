import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadCollectionV2 } from "../../../model/user_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface LaunchpadApi_ListCollectionV2RequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export type LaunchpadApi_ListCollectionV2ResponseItem =
  Partial<ModelLaunchpadCollectionV2>;

export type LaunchpadApi_ListCollectionV2ResponseBody =
  ResponseListWrapper<LaunchpadApi_ListCollectionV2ResponseItem>;

/**
 * @description 获取我的收藏列表V2
 * @endpoint LIST /api/v2/launchpad/collection
 */
export const LaunchpadApi_listCollectionV2 = async (
  params: LaunchpadApi_ListCollectionV2RequestParams,
  options?: HttpOptions
): Promise<LaunchpadApi_ListCollectionV2ResponseBody> =>
  /**! @contract easyops.api.user_service.launchpad.ListCollectionV2@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<LaunchpadApi_ListCollectionV2ResponseBody>
    >(
      "api/gateway/user_service.launchpad.ListCollectionV2/api/v2/launchpad/collection",
      { ...options, params }
    )
  ).data;
