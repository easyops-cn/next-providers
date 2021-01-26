import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListUsersInfoV2RequestParams {
  /** 状态 */
  state?: string;

  /** 查询的name列表,使用逗号分隔 */
  comma_separated_string?: string;

  /** 页码 */
  page?: number;

  /** 页大小 */
  pageSize?: number;
}

export interface ListUsersInfoV2ResponseBody {
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
 * @description 获取用户信息列表v2 (返回结构化信息,方便使用)
 * @endpoint GET /api/v1/users
 */
export const listUsersInfoV2 = async (
  params: ListUsersInfoV2RequestParams,
  options?: HttpOptions
): Promise<ListUsersInfoV2ResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListUsersInfoV2ResponseBody>>(
      "api/gateway/user_service.user_admin.ListUsersInfoV2/api/v1/users",
      { ...options, params }
    )
  ).data;
