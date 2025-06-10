import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_GetUserOrgsRequestParams {
  /** 用户名 */
  username: string;
}

export interface UserAdminApi_GetUserOrgsResponseBody {
  /** 已加入的组织列表 */
  orgList?: UserAdminApi_GetUserOrgsResponseBody_orgList_item[];
}

/**
 * @description 获取用户关联的所有org
 * @endpoint GET /api/v1/users/orgs
 */
export const UserAdminApi_getUserOrgs = async (
  params: UserAdminApi_GetUserOrgsRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_GetUserOrgsResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserOrgs@1.0.0 */ (
    await http.get<ResponseBodyWrapper<UserAdminApi_GetUserOrgsResponseBody>>(
      "api/gateway/logic.user_service/api/v1/users/orgs",
      { ...options, params }
    )
  ).data;

export interface UserAdminApi_GetUserOrgsResponseBody_orgList_item {
  /** 用户关联的组织 */
  org?: number;

  /** 组织名称 */
  name?: string;
}
