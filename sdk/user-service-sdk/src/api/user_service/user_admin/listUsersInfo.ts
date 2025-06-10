import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_ListUsersInfoRequestParams {
  /** 状态 */
  state?: string;

  /** 查询的name列表,使用逗号分隔 */
  name?: string;

  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface UserAdminApi_ListUsersInfoResponseBody {
  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;

  /** 总数 */
  total?: number;

  /** 用户列表 */
  list?: Record<string, any>[];
}

/**
 * @description 获取用户信息列表
 * @endpoint GET /api/v1/users
 */
export const UserAdminApi_listUsersInfo = async (
  params: UserAdminApi_ListUsersInfoRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_ListUsersInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListUsersInfo@1.0.0 */ (
    await http.get<ResponseBodyWrapper<UserAdminApi_ListUsersInfoResponseBody>>(
      "api/gateway/logic.user_service/api/v1/users",
      { ...options, params }
    )
  ).data;
