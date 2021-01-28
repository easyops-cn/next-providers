import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleChangePermissionRequestBody {
  /** 添加权限id列表 */
  add_permissions: string[];

  /** 删除权限id列表 */
  delete_permissions: string[];
}

export interface RoleChangePermissionResponseBody {
  /** 角色成功修改的权限数量 */
  count?: number;
}

/**
 * @description 角色修改权限
 * @endpoint PUT /api/v1/permission_role/role_change_permission/:id
 */
export const roleChangePermission = async (
  id: string | number,
  data: RoleChangePermissionRequestBody,
  options?: HttpOptions
): Promise<RoleChangePermissionResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<RoleChangePermissionResponseBody>>(
      `api/gateway/permission.role.RoleChangePermission/api/v1/permission_role/role_change_permission/${id}`,
      data,
      options
    )
  ).data;
