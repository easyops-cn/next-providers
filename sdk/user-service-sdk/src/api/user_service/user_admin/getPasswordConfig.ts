import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetPasswordConfigResponseBody {
  /** 正则 */
  regex?: string;

  /** 提示 */
  description?: string;
}

/**
 * @description 获取密码配置
 * @endpoint GET /api/v1/users/passconf
 */
export const getPasswordConfig = async (
  options?: HttpOptions
): Promise<GetPasswordConfigResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetPasswordConfigResponseBody>>(
      "api/gateway/user_service.user_admin.GetPasswordConfig/api/v1/users/passconf",
      options
    )
  ).data;
