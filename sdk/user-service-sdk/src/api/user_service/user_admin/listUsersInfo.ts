import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListUsersInfoRequestParams {
  /** 状态 */
  state?: string;

  /** 查询的name列表,使用逗号分隔 */
  name?: string;

  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface ListUsersInfoResponseBody {
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
export const listUsersInfo = async (
  params: ListUsersInfoRequestParams,
  options?: HttpOptions
): Promise<ListUsersInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListUsersInfo */ (
    await http.get<ResponseBodyWrapper<ListUsersInfoResponseBody>>(
      "api/gateway/user_service.user_admin.ListUsersInfo/api/v1/users",
      { ...options, params }
    )
  ).data;
