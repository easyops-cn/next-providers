import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionApi_ValidateArtifactPermissionRequestParams {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点 */
  action: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false */
  validate_action_only?: boolean;

  /** 包id */
  package_id: string;

  /** 版本id, 多个用,连接，并把batch参数置为true */
  version_id: string;

  /** 是否批量鉴权版本 */
  batch?: boolean;
}

export interface PermissionApi_ValidateArtifactPermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 返回数据 */
  data?: PermissionApi_ValidateArtifactPermissionResponseBody_data;
}

/**
 * @description 校验制品包系统权限
 * @endpoint GET /api/v1/permission/validate
 */
export const PermissionApi_validateArtifactPermission = (
  params: PermissionApi_ValidateArtifactPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_ValidateArtifactPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidateArtifactPermission@1.0.0 */ http.get<PermissionApi_ValidateArtifactPermissionResponseBody>(
    "api/gateway/permission.permission.ValidateArtifactPermission/api/v1/permission/validate",
    { ...options, params }
  );

export interface PermissionApi_ValidateArtifactPermissionResponseBody_data {
  /** 是否鉴权成功 */
  accepted?: boolean;
}
