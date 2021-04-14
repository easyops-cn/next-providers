import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListUsersIdRequestParams {
  /** 状态 */
  state?: string;
}

export type ListUsersIdResponseBody = string[];

/**
 * @description 获取用户name列表
 * @endpoint GET /api/v1/users/id
 */
export const listUsersId = async (
  params: ListUsersIdRequestParams,
  options?: HttpOptions
): Promise<ListUsersIdResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListUsersId */ (
    await http.get<ResponseBodyWrapper<ListUsersIdResponseBody>>(
      "api/gateway/user_service.user_admin.ListUsersId/api/v1/users/id",
      { ...options, params }
    )
  ).data;
