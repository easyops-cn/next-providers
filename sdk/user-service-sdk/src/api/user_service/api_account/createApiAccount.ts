import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ApiAccountApi_CreateApiAccountRequestBody {
  /** 用户名 */
  user: string;

  /** 用户昵称 */
  nickname?: string;
}

export interface ApiAccountApi_CreateApiAccountResponseBody {
  /** jobID */
  instanceId?: string;
}

/**
 * @description 创建api用户
 * @endpoint POST /api/user_service/v1/api_account
 */
export const ApiAccountApi_createApiAccount = async (
  data: ApiAccountApi_CreateApiAccountRequestBody,
  options?: HttpOptions
): Promise<ApiAccountApi_CreateApiAccountResponseBody> =>
  /**! @contract easyops.api.user_service.api_account.CreateApiAccount@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ApiAccountApi_CreateApiAccountResponseBody>
    >(
      "api/gateway/user_service.api_account.CreateApiAccount/api/user_service/v1/api_account",
      data,
      options
    )
  ).data;
