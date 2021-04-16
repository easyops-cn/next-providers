import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_ListGroupsIdRequestParams {
  /** 用户id, 传此参数返回用户所在的所有用户组, 默认返回所有用户组 */
  user_id?: string;
}

export interface UserAdminApi_ListGroupsIdResponseBody {
  /** 返回码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误码解析 */
  codeExplain?: string;

  /** 用户组列表 */
  data?: string[];
}

/**
 * @description 获取用户组Id列表
 * @endpoint GET /api/v1/groups/id
 */
export const UserAdminApi_listGroupsId = (
  params: UserAdminApi_ListGroupsIdRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_ListGroupsIdResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListGroupsId */ http.get<UserAdminApi_ListGroupsIdResponseBody>(
    "api/gateway/user_service.user_admin.ListGroupsId/api/v1/groups/id",
    { ...options, params }
  );
