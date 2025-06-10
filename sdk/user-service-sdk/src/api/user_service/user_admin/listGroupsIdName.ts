import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_ListGroupsIdNameRequestParams {
  /** 用户id, 传此参数返回用户所在的所有用户组, 默认返回所有用户组 */
  user_id?: string;
}

export type UserAdminApi_ListGroupsIdNameResponseBody = Record<string, any>;

/**
 * @description 获取用户组Id与name映射
 * @endpoint GET /api/v1/groups/id_map_name
 */
export const UserAdminApi_listGroupsIdName = async (
  params: UserAdminApi_ListGroupsIdNameRequestParams,
  options?: HttpOptions
): Promise<UserAdminApi_ListGroupsIdNameResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.ListGroupsIdName@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<UserAdminApi_ListGroupsIdNameResponseBody>
    >("api/gateway/logic.user_service/api/v1/groups/id_map_name", {
      ...options,
      params,
    })
  ).data;
