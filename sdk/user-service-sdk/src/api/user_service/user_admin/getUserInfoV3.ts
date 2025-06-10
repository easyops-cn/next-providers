import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type UserAdminApi_GetUserInfoV3ResponseBody = Partial<ModelUserInfo>;

/**
 * @description 获取用户信息v3 (返回结构化信息,方便使用)
 * @endpoint GET /api/v3/users/detail/:username
 */
export const UserAdminApi_getUserInfoV3 = async (
  username: string | number,
  options?: HttpOptions
): Promise<UserAdminApi_GetUserInfoV3ResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserInfoV3@1.1.0 */ (
    await http.get<ResponseBodyWrapper<UserAdminApi_GetUserInfoV3ResponseBody>>(
      `api/gateway/logic.user_service/api/v3/users/detail/${username}`,
      options
    )
  ).data;
