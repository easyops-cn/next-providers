import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleAddUserRequestBody {
  /** 用户名列表 */
  operate_user?: string[];
}

export interface RoleAddUserResponseBody {
  /** 新加用户数量 */
  count?: number;
}

/**
 * @description 角色新加用户
 * @endpoint PUT /api/v1/permission_role/role_add_user/:id
 */
export const roleAddUser = async (
  id: string | number,
  data: RoleAddUserRequestBody,
  options?: HttpOptions
): Promise<RoleAddUserResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<RoleAddUserResponseBody>>(
      `api/gateway/permission.role.RoleAddUser/api/v1/permission_role/role_add_user/${id}`,
      data,
      options
    )
  ).data;
