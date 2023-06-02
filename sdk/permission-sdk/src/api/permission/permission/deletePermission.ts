import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionApi_DeletePermissionRequestParams {
  /** 需要鉴权的动作, 全局唯一 */
  action?: string;
}

export interface PermissionApi_DeletePermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 数据 */
  data?: PermissionApi_DeletePermissionResponseBody_data;
}

/**
 * @description 根据action删除权限点
 * @endpoint DELETE /api/v1/permission
 */
export const PermissionApi_deletePermission = (
  params: PermissionApi_DeletePermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_DeletePermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.DeletePermission@1.0.0 */ http.delete<PermissionApi_DeletePermissionResponseBody>(
    "api/gateway/permission.permission.DeletePermission/api/v1/permission",
    { ...options, params }
  );

export interface PermissionApi_DeletePermissionResponseBody_data {
  /** 删除权限数量 */
  count?: number;
}
