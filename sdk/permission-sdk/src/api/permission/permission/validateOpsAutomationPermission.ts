import { http, HttpOptions } from "@next-core/brick-http";

export interface ValidateOpsAutomationPermissionRequestParams {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点 */
  action: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false */
  validate_action_only?: boolean;
}

export interface ValidateOpsAutomationPermissionResponseBody {
  /** api返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 返回数据 */
  data?: ValidateOpsAutomationPermissionResponseBody_data;
}

/**
 * @description 校验运维自动化系统权限
 * @endpoint GET /api/v1/permission/validate
 */
export const validateOpsAutomationPermission = (
  params: ValidateOpsAutomationPermissionRequestParams,
  options?: HttpOptions
): Promise<ValidateOpsAutomationPermissionResponseBody> =>
  http.get<ValidateOpsAutomationPermissionResponseBody>(
    "api/gateway/permission.permission.ValidateOpsAutomationPermission/api/v1/permission/validate",
    { ...options, params }
  );

export interface ValidateOpsAutomationPermissionResponseBody_data {
  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 是否为管理员 */
  is_admin?: boolean;

  /** 有权限的实例 */
  authorizers?: string[];
}
