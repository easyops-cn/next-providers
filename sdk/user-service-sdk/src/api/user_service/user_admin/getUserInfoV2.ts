import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type UserAdminApi_GetUserInfoV2ResponseBody = Partial<ModelUserInfo>;

/**
 * @description 获取用户信息v2 (返回结构化信息,方便使用)
 * @endpoint GET /api/v1/users/detail/:username
 */
export const UserAdminApi_getUserInfoV2 = async (
  username: string | number,
  options?: HttpOptions
): Promise<UserAdminApi_GetUserInfoV2ResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserInfoV2@1.1.0 */ (
    await http.get<ResponseBodyWrapper<UserAdminApi_GetUserInfoV2ResponseBody>>(
      `api/gateway/user_service.user_admin.GetUserInfoV2/api/v1/users/detail/${username}`,
      options
    )
  ).data;
