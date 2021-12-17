import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_ListUsersIdRequestParams {
  /** 状态 */
  state?: string;
}

export type UserAdminApi_ListUsersIdResponseBody = string[];

/**
 * @description 获取用户name列表
 * @endpoint GET /api/v1/users/id
 */
export const UserAdminApi_listUsersId = async (
  params: UserAdminApi_ListUsersIdRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_ListUsersIdResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListUsersId@1.0.0 */ (
    await http.get<ResponseBodyWrapper<UserAdminApi_ListUsersIdResponseBody>>(
      "api/gateway/user_service.user_admin.ListUsersId/api/v1/users/id",
      { ...options, params }
    )
  ).data;
