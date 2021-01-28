import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleSetUserRequestBody {
  /** 角色名列表 */
  roles: string[];
}

export interface RoleSetUserResponseBody {
  /** 成功设置的用户数量 */
  count?: number;
}

/**
 * @description 设置用户(组)所属角色
 * @endpoint PUT /api/v1/permission_role/user_set_roles/:user
 */
export const roleSetUser = async (
  user: string | number,
  data: RoleSetUserRequestBody,
  options?: HttpOptions
): Promise<RoleSetUserResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<RoleSetUserResponseBody>>(
      `api/gateway/permission.role.RoleSetUser/api/v1/permission_role/user_set_roles/${user}`,
      data,
      options
    )
  ).data;
