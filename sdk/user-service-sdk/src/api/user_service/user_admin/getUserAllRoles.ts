import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_GetUserAllRolesResponseBody {
  /** 返回码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误码解析 */
  codeExplain?: string;

  /** 角色 */
  data?: string[];
}

/**
 * @description 获取用户所有角色
 * @endpoint GET /api/v1/users/roles/:username/all
 */
export const UserAdminApi_getUserAllRoles = (
  username: string | number,
  options?: HttpOptions
): Promise<UserAdminApi_GetUserAllRolesResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserAllRoles@1.0.0 */ http.get<UserAdminApi_GetUserAllRolesResponseBody>(
    `api/gateway/logic.user_service/api/v1/users/roles/${username}/all`,
    options
  );
