import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description org注册
 * @endpoint POST /api/v1/org/register
 */
export const OrgApi_orgRegister = (options?: HttpOptions): Promise<void> =>
  /**! @contract easyops.api.permission.org.OrgRegister@1.0.0 */ http.post<void>(
    "api/gateway/permission.org.OrgRegister/api/v1/org/register",
    undefined,
    options
  );
