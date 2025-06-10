import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export type UserAdminApi_GetUserInfoResponseBody = Record<string, any>;

/**
 * @description 获取用户信息
 * @endpoint GET /api/v1/users/detail/:username
 */
export const UserAdminApi_getUserInfo = async (
  username: string | number,
  options?: HttpOptions
): Promise<UserAdminApi_GetUserInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserInfo@1.0.0 */ (
    await http.get<ResponseBodyWrapper<UserAdminApi_GetUserInfoResponseBody>>(
      `api/gateway/logic.user_service/api/v1/users/detail/${username}`,
      options
    )
  ).data;
