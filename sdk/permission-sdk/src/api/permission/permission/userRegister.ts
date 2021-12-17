import { http, HttpOptions } from "@next-core/brick-http";

export interface PermissionApi_UserRegisterRequestBody {
  /** name */
  name: string;

  /** is_admin */
  is_admin?: boolean;
}

export interface PermissionApi_UserRegisterResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;
}

/**
 * @description user注册接口
 * @endpoint POST /api/v2/permission/register_user
 */
export const PermissionApi_userRegister = (
  data: PermissionApi_UserRegisterRequestBody,
  options?: HttpOptions
): Promise<PermissionApi_UserRegisterResponseBody> =>
  /**! @contract easyops.api.permission.permission.UserRegister@1.0.0 */ http.post<PermissionApi_UserRegisterResponseBody>(
    "api/gateway/permission.permission.UserRegister/api/v2/permission/register_user",
    data,
    options
  );
