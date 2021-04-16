import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";

export type UserAdminApi_UpdateUserInfoRequestBody = Partial<ModelUserInfo>;

/**
 * @description 更新用户信息 (更新用户信息)
 * @endpoint PUT /api/v1/users/info/:instanceId
 */
export const UserAdminApi_updateUserInfo = (
  instanceId: string | number,
  data: UserAdminApi_UpdateUserInfoRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.UpdateUserInfo */ http.put<void>(
    `api/gateway/user_service.user_admin.UpdateUserInfo/api/v1/users/info/${instanceId}`,
    data,
    options
  );
