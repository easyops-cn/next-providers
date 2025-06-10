import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ApikeyApi_GetApiKeyResponseBody {
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
export const ApikeyApi_getApiKey = async (
  options?: HttpOptions
): Promise<ApikeyApi_GetApiKeyResponseBody> =>
  /**! @contract easyops.api.user_service.apikey.GetApiKey@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ApikeyApi_GetApiKeyResponseBody>>(
      "api/gateway/logic.user_service/profile/apikey",
      options
    )
  ).data;
