import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_GetSimpleUserInfoResponseBody {
  /** 用户name */
  name?: string;

  /** org */
  org?: number;
}

/**
 * @description 获取简单用户信息 (返回结构化信息,方便使用--无需登录即可获取用户信息)
 * @endpoint GET /api/v1/users/simple_detail/:username
 */
export const UserAdminApi_getSimpleUserInfo = async (
  username: string | number,
  options?: HttpOptions
): Promise<UserAdminApi_GetSimpleUserInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetSimpleUserInfo@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<UserAdminApi_GetSimpleUserInfoResponseBody>
    >(
      `api/gateway/logic.user_service/api/v1/users/simple_detail/${username}`,
      options
    )
  ).data;
