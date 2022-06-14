import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleV2Api_GetUserRoleV2RequestParams {
  /** 用户名 */
  user?: string;

  /** 根据角色名称模糊查询 */
  role?: string;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;
}

export interface RoleV2Api_GetUserRoleV2ResponseBody {
  /** 角色名称列表 */
  roles?: string[];
}

/**
 * @description 获取用户关联的角色
 * @endpoint GET /api/v2/permission_role/user_role
 */
export const RoleV2Api_getUserRoleV2 = async (
  params: RoleV2Api_GetUserRoleV2RequestParams,
  options?: HttpOptions
): Promise<RoleV2Api_GetUserRoleV2ResponseBody> =>
  /**! @contract easyops.api.permission.role_v2.GetUserRoleV2@1.0.0 */ (
    await http.get<ResponseBodyWrapper<RoleV2Api_GetUserRoleV2ResponseBody>>(
      "api/gateway/permission.role_v2.GetUserRoleV2/api/v2/permission_role/user_role",
      { ...options, params }
    )
  ).data;
