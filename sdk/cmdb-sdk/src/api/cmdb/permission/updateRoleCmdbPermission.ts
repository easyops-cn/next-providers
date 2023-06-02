import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionApi_UpdateRoleCmdbPermissionRequestBody {
  /** 角色名 */
  role: string;

  /** 权限类型列表, create(创建)、access(访问)、delete(删除)、update(更新)、export(导出)、apply(提交变更)、operate(实例操作，仅支持模型：HOST|_DBSERVICE|_DBINSTANCE) */
  permissionKinds: (
    | "create"
    | "access"
    | "delete"
    | "update"
    | "export"
    | "apply"
    | "operate"
  )[];

  /** 模型id列表 */
  objectIds: string[];
}

/**
 * @description 更新角色cmdb权限
 * @endpoint PUT /api/v1/role/cmdb/permission
 */
export const PermissionApi_updateRoleCmdbPermission = (
  data: PermissionApi_UpdateRoleCmdbPermissionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.permission.UpdateRoleCmdbPermission@1.1.0 */ http.put<void>(
    "api/gateway/cmdb.permission.UpdateRoleCmdbPermission/api/v1/role/cmdb/permission",
    data,
    options
  );
