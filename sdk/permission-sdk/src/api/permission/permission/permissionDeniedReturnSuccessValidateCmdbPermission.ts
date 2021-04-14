import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionDeniedReturnSuccessValidateCmdbPermissionRequestParams {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点 */
  action: string;

  /** 需要鉴权的object_id */
  object_id: string;

  /** 需要鉴权的instance_id */
  instance_id?: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false */
  validate_action_only?: boolean;
}

export interface PermissionDeniedReturnSuccessValidateCmdbPermissionResponseBody {
  /** 鉴权返回码. 0 - 有权限, 901 - 权限角色不满足, 902 - 权限依赖资源不满足 */
  validate_code?: 0 | 901 | 902;
}

/**
 * @description 校验cmdb权限(注意：如果用户没有权限，这个接口也会返回成功，不会返回403)
 * @endpoint GET /api/v1/permission/permission-denied-return-success-validate
 */
export const permissionDeniedReturnSuccessValidateCmdbPermission = async (
  params: PermissionDeniedReturnSuccessValidateCmdbPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionDeniedReturnSuccessValidateCmdbPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.PermissionDeniedReturnSuccessValidateCmdbPermission */ (
    await http.get<
      ResponseBodyWrapper<PermissionDeniedReturnSuccessValidateCmdbPermissionResponseBody>
    >(
      "api/gateway/permission.permission.PermissionDeniedReturnSuccessValidateCmdbPermission/api/v1/permission/permission-denied-return-success-validate",
      { ...options, params }
    )
  ).data;
