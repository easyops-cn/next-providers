import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionApi_BatchSetPermissionDisableStatusRequestBody {
  /** 权限列表 */
  permissions?: string[];

  /** 启用/禁用 */
  action?: "enable" | "disable";
}

/**
 * @description 批量启用/禁用权限点
 * @endpoint PUT /api/v1/permission/batch_set_disable_status
 */
export const PermissionApi_batchSetPermissionDisableStatus = (
  data: PermissionApi_BatchSetPermissionDisableStatusRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.permission.BatchSetPermissionDisableStatus@1.0.0 */ http.put<void>(
    "api/gateway/permission.permission.BatchSetPermissionDisableStatus/api/v1/permission/batch_set_disable_status",
    data,
    options
  );
