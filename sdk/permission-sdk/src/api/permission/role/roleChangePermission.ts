import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleApi_RoleChangePermissionRequestBody {
  /** 添加权限id列表 */
  add_permissions: string[];

  /** 删除权限id列表 */
  delete_permissions: string[];
}

export interface RoleApi_RoleChangePermissionResponseBody {
  /** 角色成功修改的权限数量 */
  count?: number;
}

/**
 * @description 角色修改权限
 * @endpoint PUT /api/v1/permission_role/role_change_permission/:id
 */
export const RoleApi_roleChangePermission = async (
  id: string | number,
  data: RoleApi_RoleChangePermissionRequestBody,
  options?: HttpOptions
): Promise<RoleApi_RoleChangePermissionResponseBody> =>
  /**! @contract easyops.api.permission.role.RoleChangePermission */ (
    await http.put<
      ResponseBodyWrapper<RoleApi_RoleChangePermissionResponseBody>
    >(
      `api/gateway/permission.role.RoleChangePermission/api/v1/permission_role/role_change_permission/${id}`,
      data,
      options
    )
  ).data;
