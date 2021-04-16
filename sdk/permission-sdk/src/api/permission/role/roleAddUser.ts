import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleApi_RoleAddUserRequestBody {
  /** 用户名列表 */
  operate_user?: string[];
}

export interface RoleApi_RoleAddUserResponseBody {
  /** 新加用户数量 */
  count?: number;
}

/**
 * @description 角色新加用户
 * @endpoint PUT /api/v1/permission_role/role_add_user/:id
 */
export const RoleApi_roleAddUser = async (
  id: string | number,
  data: RoleApi_RoleAddUserRequestBody,
  options?: HttpOptions
): Promise<RoleApi_RoleAddUserResponseBody> =>
  /**! @contract easyops.api.permission.role.RoleAddUser */ (
    await http.put<ResponseBodyWrapper<RoleApi_RoleAddUserResponseBody>>(
      `api/gateway/permission.role.RoleAddUser/api/v1/permission_role/role_add_user/${id}`,
      data,
      options
    )
  ).data;
