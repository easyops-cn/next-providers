import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 禁用用户ApiKey[内部]
 * @endpoint PUT /api/v1/apikey/disable/:access_key
 */
export const ApikeyApi_disableApiKey = (
  access_key: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.apikey.DisableApiKey@1.0.0 */ http.put<void>(
    `api/gateway/logic.user_service/api/v1/apikey/disable/${access_key}`,
    undefined,
    options
  );
