import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除用户ApiKey[内部]
 * @endpoint DELETE /api/v1/apikey/delete/:access_key
 */
export const ApikeyApi_deleteApiKey = (
  access_key: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.apikey.DeleteApiKey@1.0.0 */ http.delete<void>(
    `api/gateway/user_service.apikey.DeleteApiKey/api/v1/apikey/delete/${access_key}`,
    options
  );
