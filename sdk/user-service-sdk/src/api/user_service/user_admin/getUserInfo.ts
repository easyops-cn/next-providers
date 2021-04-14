import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetUserInfoResponseBody = Record<string, any>;

/**
 * @description 获取用户信息
 * @endpoint GET /api/v1/users/detail/:username
 */
export const getUserInfo = async (
  username: string | number,
  options?: HttpOptions
): Promise<GetUserInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserInfo */ (
    await http.get<ResponseBodyWrapper<GetUserInfoResponseBody>>(
      `api/gateway/user_service.user_admin.GetUserInfo/api/v1/users/detail/${username}`,
      options
    )
  ).data;
