import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_InviteUserToOrgRequestBody {
  /** 用户名, 可以批量邀请多个用户 */
  username: string[];

  /** 邀请加入的组织 */
  org: number;
}

/**
 * @description 邀请用户加入组织
 * @endpoint POST /api/v1/users/orgs/join
 */
export const UserAdminApi_inviteUserToOrg = (
  data: UserAdminApi_InviteUserToOrgRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.InviteUserToOrg@1.0.0 */ http.post<void>(
    "api/gateway/user_service.user_admin.InviteUserToOrg/api/v1/users/orgs/join",
    data,
    options
  );
