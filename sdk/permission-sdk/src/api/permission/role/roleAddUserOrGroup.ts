import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleAddUserOrGroupRequestBody {
  /** 用户名列表 */
  operate_user?: string[];

  /** 用户组列表 */
  operate_user_group?: string[];
}

export interface RoleAddUserOrGroupResponseBody {
  /** 新加用户(组)数量 */
  count?: number;
}

/**
 * @description 角色添加用户(组)
 * @endpoint PUT /api/v1/permission_role/role_add_user_or_group/:id
 */
export const roleAddUserOrGroup = async (
  id: string | number,
  data: RoleAddUserOrGroupRequestBody,
  options?: HttpOptions
): Promise<RoleAddUserOrGroupResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<RoleAddUserOrGroupResponseBody>>(
      `api/gateway/permission.role.RoleAddUserOrGroup/api/v1/permission_role/role_add_user_or_group/${id}`,
      data,
      options
    )
  ).data;
