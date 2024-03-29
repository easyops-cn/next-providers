import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_ValidateClusterPermissionRequestParams {
  /** 需要鉴权的权限点 */
  action: string;

  /** 需要鉴权的用户名 */
  user: string;

  /** 应用的实例ID */
  app_id: string;

  /** 只校验权限点，不进行白名单校验 */
  validate_action_only?: boolean;
}

export interface PermissionApi_ValidateClusterPermissionResponseBody {
  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 权限是否被禁用 */
  disable?: boolean;
}

/**
 * @description 校验用户对集群的操作权限
 * @endpoint GET /api/v1/permission/validate
 */
export const PermissionApi_validateClusterPermission = async (
  params: PermissionApi_ValidateClusterPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_ValidateClusterPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidateClusterPermission@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_ValidateClusterPermissionResponseBody>
    >(
      "api/gateway/permission.permission.ValidateClusterPermission/api/v1/permission/validate",
      { ...options, params }
    )
  ).data;
