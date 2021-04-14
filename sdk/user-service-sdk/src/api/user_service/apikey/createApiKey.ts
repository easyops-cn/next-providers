import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateApiKeyResponseBody {
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
 * @description 创建用户ApiKey[内部]
 * @endpoint POST /api/v1/apikey/:user
 */
export const createApiKey = async (
  user: string | number,
  options?: HttpOptions
): Promise<CreateApiKeyResponseBody> =>
  /**! @contract easyops.api.user_service.apikey.CreateApiKey */ (
    await http.post<ResponseBodyWrapper<CreateApiKeyResponseBody>>(
      `api/gateway/user_service.apikey.CreateApiKey/api/v1/apikey/${user}`,
      undefined,
      options
    )
  ).data;
