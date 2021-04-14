import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ValidatePermissionsRequestBody {
  /** 权限点action列表 */
  actions?: string[];
}

export interface ValidatePermissionsResponseBody {
  /** 权限点列表 */
  actions?: ValidatePermissionsResponseBody_actions_item[];
}

/**
 * @description 校验系统权限
 * @endpoint POST /api/micro_app/v1/permission/validate
 */
export const validatePermissions = async (
  data: ValidatePermissionsRequestBody,
  options?: HttpOptions
): Promise<ValidatePermissionsResponseBody> =>
  /**! @contract easyops.api.micro_app.permission.ValidatePermissions */ (
    await http.post<ResponseBodyWrapper<ValidatePermissionsResponseBody>>(
      "api/gateway/micro_app.permission.ValidatePermissions/api/micro_app/v1/permission/validate",
      data,
      options
    )
  ).data;

export interface ValidatePermissionsResponseBody_actions_item {
  /** action */
  action?: string;

  /** 授权状态 */
  authorizationStatus?: "authorized" | "unauthorized" | "undefined";
}
