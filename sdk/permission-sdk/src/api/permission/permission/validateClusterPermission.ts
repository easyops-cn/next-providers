import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ValidateClusterPermissionRequestParams {
  /** 需要鉴权的权限点 */
  action: string;

  /** 需要鉴权的用户名 */
  user: string;

  /** 应用的实例ID */
  app_id: string;
}

export interface ValidateClusterPermissionResponseBody {
  /** 是否鉴权成功 */
  accepted?: boolean;
}

/**
 * @description 校验用户对集群的操作权限
 * @endpoint GET /api/v1/permission/validate
 */
export const validateClusterPermission = async (
  params: ValidateClusterPermissionRequestParams,
  options?: HttpOptions
): Promise<ValidateClusterPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidateClusterPermission */ (
    await http.get<ResponseBodyWrapper<ValidateClusterPermissionResponseBody>>(
      "api/gateway/permission.permission.ValidateClusterPermission/api/v1/permission/validate",
      { ...options, params }
    )
  ).data;
