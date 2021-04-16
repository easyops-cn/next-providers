import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ApikeyApi_ResetApiKeyResponseBody {
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
 * @description 重置用户ApiKey[内部]
 * @endpoint PUT /api/v1/apikey/_reset/:user
 */
export const ApikeyApi_resetApiKey = async (
  user: string | number,
  options?: HttpOptions
): Promise<ApikeyApi_ResetApiKeyResponseBody> =>
  /**! @contract easyops.api.user_service.apikey.ResetApiKey */ (
    await http.put<ResponseBodyWrapper<ApikeyApi_ResetApiKeyResponseBody>>(
      `api/gateway/user_service.apikey.ResetApiKey/api/v1/apikey/_reset/${user}`,
      undefined,
      options
    )
  ).data;
