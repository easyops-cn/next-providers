import { http, HttpOptions } from "@next-core/brick-http";

export interface ValidatePermissionSystemPermissionRequestParams {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点 */
  action: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false */
  validate_action_only?: boolean;
}

export interface ValidatePermissionSystemPermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 返回数据 */
  data?: ValidatePermissionSystemPermissionResponseBody_data;
}

/**
 * @description 校验权限系统权限
 * @endpoint GET /api/v1/permission/validate
 */
export const validatePermissionSystemPermission = (
  params: ValidatePermissionSystemPermissionRequestParams,
  options?: HttpOptions
): Promise<ValidatePermissionSystemPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidatePermissionSystemPermission */ http.get<ValidatePermissionSystemPermissionResponseBody>(
    "api/gateway/permission.permission.ValidatePermissionSystemPermission/api/v1/permission/validate",
    { ...options, params }
  );

export interface ValidatePermissionSystemPermissionResponseBody_data {
  /** 是否鉴权成功 */
  accepted?: boolean;
}
