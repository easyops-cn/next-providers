import { http, HttpOptions } from "@next-core/brick-http";

export interface ExportPermissionsRequestBody {
  /** cmdb实例标识 */
  instanceId?: string;
}

/**
 * @description 同步权限点到开发环境
 * @endpoint POST /api/v1/permission/export
 */
export const exportPermissions = (
  data: ExportPermissionsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/next_builder.permission.ExportPermissions/api/v1/permission/export",
    data,
    options
  );
