import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetUserInfoV3ResponseBody = Partial<ModelUserInfo>;

/**
 * @description 获取用户信息v3 (返回结构化信息,方便使用)
 * @endpoint GET /api/v3/users/detail/:username
 */
export const getUserInfoV3 = async (
  username: string | number,
  options?: HttpOptions
): Promise<GetUserInfoV3ResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetUserInfoV3 */ (
    await http.get<ResponseBodyWrapper<GetUserInfoV3ResponseBody>>(
      `api/gateway/user_service.user_admin.GetUserInfoV3/api/v3/users/detail/${username}`,
      options
    )
  ).data;
