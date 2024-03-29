import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description org注册permission
 * @endpoint POST /api/v1/org/register
 */
export const PermissionApi_orgRegister = (
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.permission.OrgRegister@1.0.0 */ http.post<void>(
    "api/gateway/permission.permission.OrgRegister/api/v1/org/register",
    undefined,
    options
  );
