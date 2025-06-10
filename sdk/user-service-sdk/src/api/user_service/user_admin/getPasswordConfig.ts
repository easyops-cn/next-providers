import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_GetPasswordConfigResponseBody {
  /** 正则 */
  regex?: string;

  /** 提示 */
  description?: string;
}

/**
 * @description 获取密码配置
 * @endpoint GET /api/v1/users/passconf
 */
export const UserAdminApi_getPasswordConfig = async (
  options?: HttpOptions
): Promise<UserAdminApi_GetPasswordConfigResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.GetPasswordConfig@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<UserAdminApi_GetPasswordConfigResponseBody>
    >("api/gateway/logic.user_service/api/v1/users/passconf", options)
  ).data;
