import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";

export type UpdateUserInfoRequestBody = Partial<ModelUserInfo>;

/**
 * @description 更新用户信息 (更新用户信息)
 * @endpoint PUT /api/v1/users/info/:instanceId
 */
export const updateUserInfo = (
  instanceId: string | number,
  data: UpdateUserInfoRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.UpdateUserInfo */ http.put<void>(
    `api/gateway/user_service.user_admin.UpdateUserInfo/api/v1/users/info/${instanceId}`,
    data,
    options
  );
