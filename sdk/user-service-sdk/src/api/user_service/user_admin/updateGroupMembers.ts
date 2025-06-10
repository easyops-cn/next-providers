import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_UpdateGroupMembersRequestBody {
  /** 用户instanceId列表 */
  userIds: string[];

  /** 操作, append: 添加用户到用户组 remove: 将用户从用户组中移除 */
  op?: "append" | "remove";
}

/**
 * @description 更新用户组成员(添加/移除)
 * @endpoint PUT /api/v1/groups/:groupId/members
 */
export const UserAdminApi_updateGroupMembers = (
  groupId: string | number,
  data: UserAdminApi_UpdateGroupMembersRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.UpdateGroupMembers@1.0.0 */ http.put<void>(
    `api/gateway/logic.user_service/api/v1/groups/${groupId}/members`,
    data,
    options
  );
