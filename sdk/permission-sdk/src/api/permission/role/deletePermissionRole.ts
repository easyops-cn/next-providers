import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除角色权限
 * @endpoint DELETE /api/v1/permission_role/config/:id
 */
export const deletePermissionRole = (
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/permission.role.DeletePermissionRole/api/v1/permission_role/config/${id}`,
    options
  );
