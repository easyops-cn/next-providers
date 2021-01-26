import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUserInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetUserInfoV2ResponseBody = Partial<ModelUserInfo>;

/**
 * @description 获取用户信息v2 (返回结构化信息,方便使用)
 * @endpoint GET /api/v1/users/detail/:username
 */
export const getUserInfoV2 = async (
  username: string | number,
  options?: HttpOptions
): Promise<GetUserInfoV2ResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetUserInfoV2ResponseBody>>(
      `api/gateway/user_service.user_admin.GetUserInfoV2/api/v1/users/detail/${username}`,
      options
    )
  ).data;
