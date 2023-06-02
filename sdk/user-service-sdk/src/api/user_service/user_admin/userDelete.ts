import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 用户删除[内部]
 * @endpoint DELETE /api/v1/users/:username
 */
export const UserAdminApi_userDelete = (
  username: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.UserDelete@1.0.0 */ http.delete<void>(
    `api/gateway/user_service.user_admin.UserDelete/api/v1/users/${username}`,
    options
  );
