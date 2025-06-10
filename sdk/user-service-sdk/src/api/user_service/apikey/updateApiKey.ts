import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ApikeyApi_UpdateApiKeyRequestBody {
  /** 切换用户(组) */
  switchUsers?: string[];
}

export interface ApikeyApi_UpdateApiKeyResponseBody {
  /** 用户名 */
  user: string;

  /** 切换用户id(组id) */
  switchUsers: string[];
}

/**
 * @description 修改用户ApiKey[内部]
 * @endpoint PUT /api/v1/apikey/update/:user
 */
export const ApikeyApi_updateApiKey = async (
  user: string | number,
  data: ApikeyApi_UpdateApiKeyRequestBody,
  options?: HttpOptions
): Promise<ApikeyApi_UpdateApiKeyResponseBody> =>
  /**! @contract easyops.api.user_service.apikey.UpdateApiKey@1.0.0 */ (
    await http.put<ResponseBodyWrapper<ApikeyApi_UpdateApiKeyResponseBody>>(
      `api/gateway/logic.user_service/api/v1/apikey/update/${user}`,
      data,
      options
    )
  ).data;
