import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListUsersIdNickRequestParams {
  /** 状态 */
  state?: string;
}

export type ListUsersIdNickResponseBody = Record<string, any>;

/**
 * @description 获取用户name与昵称映射
 * @endpoint GET /api/v1/users/id_map_nickname
 */
export const listUsersIdNick = async (
  params: ListUsersIdNickRequestParams,
  options?: HttpOptions
): Promise<ListUsersIdNickResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListUsersIdNick */ (
    await http.get<ResponseBodyWrapper<ListUsersIdNickResponseBody>>(
      "api/gateway/user_service.user_admin.ListUsersIdNick/api/v1/users/id_map_nickname",
      { ...options, params }
    )
  ).data;
