import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadCollection } from "../../../model/user_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface ListCollectionRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface ListCollectionResponseItem {
  /** LaunchpadCollection */
  launchpadCollection?: Partial<ModelLaunchpadCollection>;

  /** microApp Id, 当type为microApp时有该字段 */
  microAppId?: string;
}

export type ListCollectionResponseBody = ResponseListWrapper<ListCollectionResponseItem>;

/**
 * @description 获取我的收藏列表
 * @endpoint LIST /api/v1/launchpad/collection
 */
export const listCollection = async (
  params: ListCollectionRequestParams,
  options?: HttpOptions
): Promise<ListCollectionResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListCollectionResponseBody>>(
      "api/gateway/user_service.launchpad.ListCollection/api/v1/launchpad/collection",
      { ...options, params }
    )
  ).data;
