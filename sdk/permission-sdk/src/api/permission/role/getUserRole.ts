import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetUserRoleResponseBody {
  /** 角色名称列表 */
  roles?: string[];
}

/**
 * @description 获取用户及用户所在用户组所属角色
 * @endpoint GET /api/v1/permission_role/user_role/:user
 */
export const getUserRole = async (
  user: string | number,
  options?: HttpOptions
): Promise<GetUserRoleResponseBody> =>
  /**! @contract easyops.api.permission.role.GetUserRole */ (
    await http.get<ResponseBodyWrapper<GetUserRoleResponseBody>>(
      `api/gateway/permission.role.GetUserRole/api/v1/permission_role/user_role/${user}`,
      options
    )
  ).data;
