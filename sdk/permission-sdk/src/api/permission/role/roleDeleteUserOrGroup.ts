import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleApi_RoleDeleteUserOrGroupRequestBody {
  /** 用户名列表 */
  operate_user?: string[];

  /** 用户组列表 */
  operate_user_group?: string[];
}

export interface RoleApi_RoleDeleteUserOrGroupResponseBody {
  /** 新加用户(组)数量 */
  count?: number;
}

/**
 * @description 角色删除用户(组)
 * @endpoint PUT /api/v1/permission_role/role_delete_user_or_group/:id
 */
export const RoleApi_roleDeleteUserOrGroup = async (
  id: string | number,
  data: RoleApi_RoleDeleteUserOrGroupRequestBody,
  options?: HttpOptions
): Promise<RoleApi_RoleDeleteUserOrGroupResponseBody> =>
  /**! @contract easyops.api.permission.role.RoleDeleteUserOrGroup */ (
    await http.put<
      ResponseBodyWrapper<RoleApi_RoleDeleteUserOrGroupResponseBody>
    >(
      `api/gateway/permission.role.RoleDeleteUserOrGroup/api/v1/permission_role/role_delete_user_or_group/${id}`,
      data,
      options
    )
  ).data;
