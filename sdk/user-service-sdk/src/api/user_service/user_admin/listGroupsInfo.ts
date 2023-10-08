import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserGroup } from "../../../model/user_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_ListGroupsInfoRequestParams {
  /** 查询的name列表(精确匹配),使用逗号分隔 */
  name?: string;

  /** name字段模糊搜索，如name字段不为空则忽略当前字段 */
  keyword?: string;

  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export type UserAdminApi_ListGroupsInfoResponseItem = Partial<ModelUserGroup>;

export type UserAdminApi_ListGroupsInfoResponseBody =
  ResponseListWrapper<UserAdminApi_ListGroupsInfoResponseItem>;

/**
 * @description 获取用户组信息列表
 * @endpoint LIST /api/v1/groups
 */
export const UserAdminApi_listGroupsInfo = async (
  params: UserAdminApi_ListGroupsInfoRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_ListGroupsInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListGroupsInfo@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<UserAdminApi_ListGroupsInfoResponseBody>
    >("api/gateway/user_service.user_admin.ListGroupsInfo/api/v1/groups", {
      ...options,
      params,
    })
  ).data;
