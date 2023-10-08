import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_ListUsersInfoV3RequestParams {
  /** 状态 */
  state?: string;

  /** 查询的name列表(精确匹配),使用逗号分隔 */
  name?: string;

  /** 页码 */
  page?: number;

  /** name字段模糊搜索，如name字段不为空则忽略当前字段 */
  keyword?: string;

  /** 查询字段列表,使用逗号分隔 */
  fields?: string;

  /** 页大小 */
  pageSize?: number;
}

export interface UserAdminApi_ListUsersInfoV3ResponseBody {
  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;

  /** 总数 */
  total?: number;

  /** 用户列表 */
  list?: Partial<ModelUserInfo>[];
}

/**
 * @description 获取用户信息列表v3 (返回结构化信息,方便使用)
 * @endpoint GET /api/v3/users
 */
export const UserAdminApi_listUsersInfoV3 = async (
  params: UserAdminApi_ListUsersInfoV3RequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_ListUsersInfoV3ResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListUsersInfoV3@1.2.0 */ (
    await http.get<
      ResponseBodyWrapper<UserAdminApi_ListUsersInfoV3ResponseBody>
    >("api/gateway/user_service.user_admin.ListUsersInfoV3/api/v3/users", {
      ...options,
      params,
    })
  ).data;
