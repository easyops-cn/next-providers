import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRole } from "../../../model/permission";

export interface RoleApi_GetPermissionRoleListRequestParams {
  /** 用户名 */
  user?: string;

  /** 角色名 */
  role?: string;

  /** 分页 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 返回指定字段，多个用,分隔 */
  fields?: string;

  /** 查询的role名称(逗号分隔) */
  role__in?: string;

  /** sdk限制字段使用 */
  XXX_RestFieldMask?: string[];
}

export interface RoleApi_GetPermissionRoleListResponseBody {
  /** 返回码 */
  code?: number;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 角色列表 */
  data?: (Partial<ModelRole> &
    RoleApi_GetPermissionRoleListResponseBody_data_item)[];
}

/**
 * @description 获取角色权限配置列表
 * @endpoint GET /api/v1/permission_role/config
 */
export const RoleApi_getPermissionRoleList = (
  params: RoleApi_GetPermissionRoleListRequestParams,
  options?: HttpOptions
): Promise<RoleApi_GetPermissionRoleListResponseBody> =>
  /**! @contract easyops.api.permission.role.GetPermissionRoleList@1.0.0 */ http.get<RoleApi_GetPermissionRoleListResponseBody>(
    "api/gateway/permission.role.GetPermissionRoleList/api/v1/permission_role/config",
    { ...options, params }
  );

export interface RoleApi_GetPermissionRoleListResponseBody_data_item {
  /** 角色禁用菜单列表 */
  forbidden_menu?: string[];
}
