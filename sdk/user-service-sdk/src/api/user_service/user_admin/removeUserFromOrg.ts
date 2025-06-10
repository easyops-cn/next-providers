import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_RemoveUserFromOrgRequestBody {
  /** 即将移出组织的用户, 可以批量移出多个用户 */
  username: string[];

  /** 移出哪个组织 */
  org: number;
}

/**
 * @description 将用户移出组织[内部]
 * @endpoint POST /api/v1/users/orgs/remove
 */
export const UserAdminApi_removeUserFromOrg = (
  data: UserAdminApi_RemoveUserFromOrgRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.RemoveUserFromOrg@1.0.0 */ http.post<void>(
    "api/gateway/logic.user_service/api/v1/users/orgs/remove",
    data,
    options
  );
