import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRole } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type RoleApi_GetRoleDetailResponseBody = Partial<ModelRole> &
  RoleApi_GetRoleDetailResponseBody_2;

/**
 * @description 获取角色权限配置详情
 * @endpoint GET /api/v1/permission_role/config/:id
 */
export const RoleApi_getRoleDetail = async (
  id: string | number,
  options?: HttpOptions
): Promise<RoleApi_GetRoleDetailResponseBody> =>
  /**! @contract easyops.api.permission.role.GetRoleDetail@1.0.0 */ (
    await http.get<ResponseBodyWrapper<RoleApi_GetRoleDetailResponseBody>>(
      `api/gateway/permission.role.GetRoleDetail/api/v1/permission_role/config/${id}`,
      options
    )
  ).data;

export interface RoleApi_GetRoleDetailResponseBody_2 {
  /** 角色禁用菜单列表 */
  forbidden_menu?: string[];
}
