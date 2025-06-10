import { http, HttpOptions } from "@next-core/brick-http";

export interface ApiAccountApi_UpdateApiAccountRequestBody {
  /** 昵称 */
  nickname?: string;

  /** 状态 */
  status?: string;

  /** 密钥 */
  access_key?: string;

  /** 更新参数过滤，如仅更新昵称，该值里写["nickname"]，为空时更新所有字段 */
  XXX_RestFieldMask?: string[];
}

/**
 * @description 修改api账户
 * @endpoint PUT /api/user_service/v1/api_account/:id
 */
export const ApiAccountApi_updateApiAccount = (
  id: string | number,
  data: ApiAccountApi_UpdateApiAccountRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.api_account.UpdateApiAccount@1.0.0 */ http.put<void>(
    `api/gateway/logic.user_service/api/user_service/v1/api_account/${id}`,
    data,
    options
  );
