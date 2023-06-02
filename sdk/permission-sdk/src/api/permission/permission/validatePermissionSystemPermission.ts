import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionApi_ValidatePermissionSystemPermissionRequestParams {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点 */
  action: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false */
  validate_action_only?: boolean;
}

export interface PermissionApi_ValidatePermissionSystemPermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 返回数据 */
  data?: PermissionApi_ValidatePermissionSystemPermissionResponseBody_data;
}

/**
 * @description 校验权限系统权限
 * @endpoint GET /api/v1/permission/validate
 */
export const PermissionApi_validatePermissionSystemPermission = (
  params: PermissionApi_ValidatePermissionSystemPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_ValidatePermissionSystemPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidatePermissionSystemPermission@1.1.0 */ http.get<PermissionApi_ValidatePermissionSystemPermissionResponseBody>(
    "api/gateway/permission.permission.ValidatePermissionSystemPermission/api/v1/permission/validate",
    { ...options, params }
  );

export interface PermissionApi_ValidatePermissionSystemPermissionResponseBody_data {
  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 权限是否被禁用 */
  disable?: boolean;
}
