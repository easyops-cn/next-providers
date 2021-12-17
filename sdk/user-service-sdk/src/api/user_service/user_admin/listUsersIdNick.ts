import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_ListUsersIdNickRequestParams {
  /** 状态 */
  state?: string;
}

export type UserAdminApi_ListUsersIdNickResponseBody = Record<string, any>;

/**
 * @description 获取用户name与昵称映射
 * @endpoint GET /api/v1/users/id_map_nickname
 */
export const UserAdminApi_listUsersIdNick = async (
  params: UserAdminApi_ListUsersIdNickRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_ListUsersIdNickResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListUsersIdNick@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<UserAdminApi_ListUsersIdNickResponseBody>
    >(
      "api/gateway/user_service.user_admin.ListUsersIdNick/api/v1/users/id_map_nickname",
      { ...options, params }
    )
  ).data;
