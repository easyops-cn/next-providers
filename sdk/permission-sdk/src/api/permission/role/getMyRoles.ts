import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleApi_GetMyRolesResponseBody {
  /** 角色名称列表 */
  roles?: string[];

  /** 有权限的权限点列表 */
  grantedPermissions?: string[];

  /** 没有权限的权限点列表 */
  deniedPermissions?: string[];

  /** 用户组列表 */
  userGroups?: RoleApi_GetMyRolesResponseBody_userGroups_item[];
}

/**
 * @description 获取当前用户及当前用户所在用户组所属角色(不需要权限)
 * @endpoint GET /api/v1/permission_role/get-my-roles
 */
export const RoleApi_getMyRoles = async (
  options?: HttpOptions
): Promise<RoleApi_GetMyRolesResponseBody> =>
  /**! @contract easyops.api.permission.role.GetMyRoles */ (
    await http.get<ResponseBodyWrapper<RoleApi_GetMyRolesResponseBody>>(
      "api/gateway/permission.role.GetMyRoles/api/v1/permission_role/get-my-roles",
      options
    )
  ).data;

export interface RoleApi_GetMyRolesResponseBody_userGroups_item {
  /** instanceId */
  instanceId?: string;

  /** 名字 */
  name?: string;
}
