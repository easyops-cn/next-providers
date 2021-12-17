import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleApi_RoleAddUserOrGroupRequestBody {
  /** 用户名列表 */
  operate_user?: string[];

  /** 用户组列表 */
  operate_user_group?: string[];
}

export interface RoleApi_RoleAddUserOrGroupResponseBody {
  /** 新加用户(组)数量 */
  count?: number;
}

/**
 * @description 角色添加用户(组)
 * @endpoint PUT /api/v1/permission_role/role_add_user_or_group/:id
 */
export const RoleApi_roleAddUserOrGroup = async (
  id: string | number,
  data: RoleApi_RoleAddUserOrGroupRequestBody,
  options?: HttpOptions
): Promise<RoleApi_RoleAddUserOrGroupResponseBody> =>
  /**! @contract easyops.api.permission.role.RoleAddUserOrGroup@1.0.0 */ (
    await http.put<ResponseBodyWrapper<RoleApi_RoleAddUserOrGroupResponseBody>>(
      `api/gateway/permission.role.RoleAddUserOrGroup/api/v1/permission_role/role_add_user_or_group/${id}`,
      data,
      options
    )
  ).data;
