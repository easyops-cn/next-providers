import { http, HttpOptions } from "@next-core/brick-http";

export interface RoleApi_GetPermissionRoleUserListRequestParams {
  /** 根据用户名称模糊查询 */
  user?: string;

  /** 分页 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 根据user字段进行排序(-user:倒序 user:正序 默认按照user数组字段中的顺序返回) */
  sort?: string;
}

export interface RoleApi_GetPermissionRoleUserListResponseBody {
  /** 返回码 */
  code?: number;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 总和 */
  total?: number;

  /** 角色关联的用户列表 */
  data?: RoleApi_GetPermissionRoleUserListResponseBody_data_item[];
}

/**
 * @description 获取角色关联的用户列表
 * @endpoint GET /api/v1/permission_role/config/:role_id/user
 */
export const RoleApi_getPermissionRoleUserList = (
  role_id: string | number,
  params: RoleApi_GetPermissionRoleUserListRequestParams,
  options?: HttpOptions
): Promise<RoleApi_GetPermissionRoleUserListResponseBody> =>
  /**! @contract easyops.api.permission.role.GetPermissionRoleUserList@1.0.0 */ http.get<RoleApi_GetPermissionRoleUserListResponseBody>(
    `api/gateway/permission.role.GetPermissionRoleUserList/api/v1/permission_role/config/${role_id}/user`,
    { ...options, params }
  );

export interface RoleApi_GetPermissionRoleUserListResponseBody_data_item {
  /** 用户名 */
  user?: string;
}
