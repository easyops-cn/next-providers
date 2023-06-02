import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleApi_PutPermissionRoleRequestBody {
  /** 角色名 */
  role: string;
}

export interface RoleApi_PutPermissionRoleResponseBody {
  /** 修改用户数量 */
  count?: number;
}

/**
 * @description 修改角色名
 * @endpoint PUT /api/v1/permission_role/rename_role/:id
 */
export const RoleApi_putPermissionRole = async (
  id: string | number,
  data: RoleApi_PutPermissionRoleRequestBody,
  options?: HttpOptions
): Promise<RoleApi_PutPermissionRoleResponseBody> =>
  /**! @contract easyops.api.permission.role.PutPermissionRole@1.0.0 */ (
    await http.put<ResponseBodyWrapper<RoleApi_PutPermissionRoleResponseBody>>(
      `api/gateway/permission.role.PutPermissionRole/api/v1/permission_role/rename_role/${id}`,
      data,
      options
    )
  ).data;
