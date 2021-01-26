import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetApiKeyResponseBody {
  /** 用户名 */
  user: string;

  /** access_key */
  access_key: string;

  /** secret_key */
  secret_key: string;

  /** 是否可用 */
  state: "invalid" | "valid";

  /** org */
  org: number;

  /** 创建时间 */
  ctime: string;

  /** 更新时间戳 */
  ts: number;
}

/**
 * @description 查询个人apikey
 * @endpoint GET /profile/apikey
 */
export const getApiKey = async (
  options?: HttpOptions
): Promise<GetApiKeyResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetApiKeyResponseBody>>(
      "api/gateway/user_service.apikey.GetApiKey/profile/apikey",
      options
    )
  ).data;
