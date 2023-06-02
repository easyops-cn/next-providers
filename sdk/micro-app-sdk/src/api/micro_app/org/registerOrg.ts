import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description org注册
 * @endpoint POST /api/v1/org/register
 */
export const OrgApi_registerOrg = (options?: HttpOptions): Promise<void> =>
  /**! @contract easyops.api.micro_app.org.RegisterOrg@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.org.RegisterOrg/api/v1/org/register",
    undefined,
    options
  );
