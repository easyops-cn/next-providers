import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 禁用用户ApiKey[内部]
 * @endpoint PUT /api/v1/apikey/disable/:access_key
 */
export const ApikeyApi_disableApiKey = (
  access_key: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.apikey.DisableApiKey */ http.put<void>(
    `api/gateway/user_service.apikey.DisableApiKey/api/v1/apikey/disable/${access_key}`,
    undefined,
    options
  );
