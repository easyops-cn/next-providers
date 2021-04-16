import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionApi_ExportPermissionsRequestBody {
  /** cmdb实例标识 */
  instanceId?: string;
}

/**
 * @description 同步权限点到开发环境
 * @endpoint POST /api/v1/permission/export
 */
export const PermissionApi_exportPermissions = (
  data: PermissionApi_ExportPermissionsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.permission.ExportPermissions */ http.post<void>(
    "api/gateway/next_builder.permission.ExportPermissions/api/v1/permission/export",
    data,
    options
  );
