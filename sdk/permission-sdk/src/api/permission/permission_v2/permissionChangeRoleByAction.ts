import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionV2Api_PermissionChangeRoleByActionRequestBody {
  /** 需要鉴权的动作, 全局唯一 */
  action: string;

  /** 添加角色名称列表 */
  addRoles?: string[];

  /** 删除角色名称列表 */
  deleteRoles?: string[];
}

/**
 * @description 根据权限点名字修改角色
 * @endpoint PUT /api/v1/permission-change-role-by-action
 */
export const PermissionV2Api_permissionChangeRoleByAction = (
  data: PermissionV2Api_PermissionChangeRoleByActionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.permission_v2.PermissionChangeRoleByAction@1.0.0 */ http.put<void>(
    "api/gateway/permission.permission_v2.PermissionChangeRoleByAction/api/v1/permission-change-role-by-action",
    data,
    options
  );
