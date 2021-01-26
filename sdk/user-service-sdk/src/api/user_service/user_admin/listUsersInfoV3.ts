import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListUsersInfoV3RequestParams {
  /** 状态 */
  state?: string;

  /** 查询的name列表,使用逗号分隔 */
  name?: string;

  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface ListUsersInfoV3ResponseBody {
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
export const listUsersInfoV3 = async (
  params: ListUsersInfoV3RequestParams,
  options?: HttpOptions
): Promise<ListUsersInfoV3ResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListUsersInfoV3ResponseBody>>(
      "api/gateway/user_service.user_admin.ListUsersInfoV3/api/v3/users",
      { ...options, params }
    )
  ).data;
