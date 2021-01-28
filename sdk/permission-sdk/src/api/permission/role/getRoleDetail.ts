import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRole } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetRoleDetailResponseBody = Partial<ModelRole> &
  GetRoleDetailResponseBody_2;

/**
 * @description 获取角色权限配置详情
 * @endpoint GET /api/v1/permission_role/config/:id
 */
export const getRoleDetail = async (
  id: string | number,
  options?: HttpOptions
): Promise<GetRoleDetailResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetRoleDetailResponseBody>>(
      `api/gateway/permission.role.GetRoleDetail/api/v1/permission_role/config/${id}`,
      options
    )
  ).data;

export interface GetRoleDetailResponseBody_2 {
  /** 角色禁用菜单列表 */
  forbidden_menu?: string[];
}
