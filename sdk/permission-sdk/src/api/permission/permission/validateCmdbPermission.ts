import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_ValidateCmdbPermissionRequestParams {
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

export interface PermissionApi_ValidateCmdbPermissionResponseBody {
  /** 是否鉴权成功 */
  accepted?: boolean;
}

/**
 * @description 校验cmdb权限
 * @endpoint GET /api/v1/permission/validate
 */
export const PermissionApi_validateCmdbPermission = async (
  params: PermissionApi_ValidateCmdbPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_ValidateCmdbPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidateCmdbPermission@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_ValidateCmdbPermissionResponseBody>
    >(
      "api/gateway/permission.permission.ValidateCmdbPermission/api/v1/permission/validate",
      { ...options, params }
    )
  ).data;
