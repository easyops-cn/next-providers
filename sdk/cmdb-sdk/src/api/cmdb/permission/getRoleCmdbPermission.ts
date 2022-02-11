import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_GetRoleCmdbPermissionRequestBody {
  /** 角色名 */
  role: string;

  /** 权限类型, create(创建)、access(访问)、delete(删除)、update(更新)、export(导出)、apply(提交变更) */
  permissionKind?:
    | "create"
    | "access"
    | "delete"
    | "update"
    | "export"
    | "apply";

  /** 模型分类 */
  category?: string;

  /** 是否展示隐藏模型 */
  hidden?: boolean;

  /** 字符搜索 */
  q?: string;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 是否筛选分类为空的模型 */
  emptyCategory?: boolean;
}

export interface PermissionApi_GetRoleCmdbPermissionResponseBody {
  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 总数 */
  total?: number;

  /** 权限列表 */
  list?: PermissionApi_GetRoleCmdbPermissionResponseBody_list_item[];
}

/**
 * @description 获取角色拥有的cmdb权限
 * @endpoint POST /api/v1/role/cmdb/permission
 */
export const PermissionApi_getRoleCmdbPermission = async (
  data: PermissionApi_GetRoleCmdbPermissionRequestBody,
  options?: HttpOptions
): Promise<PermissionApi_GetRoleCmdbPermissionResponseBody> =>
  /**! @contract easyops.api.cmdb.permission.GetRoleCmdbPermission@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PermissionApi_GetRoleCmdbPermissionResponseBody>
    >(
      "api/gateway/cmdb.permission.GetRoleCmdbPermission/api/v1/role/cmdb/permission",
      data,
      options
    )
  ).data;

export interface PermissionApi_GetRoleCmdbPermissionResponseBody_list_item {
  /** 权限点id */
  id?: string;

  /** 需要鉴权的动作, 全局唯一 */
  action?: string;

  /** 模型id */
  objectId?: string;

  /** 模型名称 */
  objectName?: string;

  /** 权限类型 */
  permissionKind?: string;

  /** 模型分类 */
  category?: string;

  /** 模型二级分类 */
  subCategory?: string;
}
