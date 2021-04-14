import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 启用用户ApiKey[内部]
 * @endpoint PUT /api/v1/apikey/enable/:access_key
 */
export const enableApiKey = (
  access_key: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.apikey.EnableApiKey */ http.put<void>(
    `api/gateway/user_service.apikey.EnableApiKey/api/v1/apikey/enable/${access_key}`,
    undefined,
    options
  );
