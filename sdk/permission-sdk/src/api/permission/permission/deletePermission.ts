import { http, HttpOptions } from "@next-core/brick-http";

export interface DeletePermissionRequestParams {
  /** 需要鉴权的动作, 全局唯一 */
  action?: string;
}

export interface DeletePermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 数据 */
  data?: DeletePermissionResponseBody_data;
}

/**
 * @description 根据action删除权限点
 * @endpoint DELETE /api/v1/permission
 */
export const deletePermission = (
  params: DeletePermissionRequestParams,
  options?: HttpOptions
): Promise<DeletePermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.DeletePermission */ http.delete<DeletePermissionResponseBody>(
    "api/gateway/permission.permission.DeletePermission/api/v1/permission",
    { ...options, params }
  );

export interface DeletePermissionResponseBody_data {
  /** 删除权限数量 */
  count?: number;
}
