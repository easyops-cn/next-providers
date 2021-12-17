import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_ValidateSchedulerPermissionRequestParams {
  /** 需要鉴权的权限点 */
  action: string;

  /** 需要鉴权的用户名 */
  user: string;

  /** 任务id */
  task_id?: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false, 须传false */
  validate_action_only?: boolean;
}

export interface PermissionApi_ValidateSchedulerPermissionResponseBody {
  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 是否为管理员 */
  is_admin?: boolean;

  /** 有权限的用户(组) */
  authorizers?: string[];
}

/**
 * @description 校验用户对定时任务的操作权限
 * @endpoint GET /api/v1/permission/validate
 */
export const PermissionApi_validateSchedulerPermission = async (
  params: PermissionApi_ValidateSchedulerPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_ValidateSchedulerPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidateSchedulerPermission@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_ValidateSchedulerPermissionResponseBody>
    >(
      "api/gateway/permission.permission.ValidateSchedulerPermission/api/v1/permission/validate",
      { ...options, params }
    )
  ).data;
