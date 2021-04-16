import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除小产品
 * @endpoint DELETE /api/micro_app/v1/installed_micro_app/:app_id
 */
export const InstalledMicroAppApi_deleteMicroApp = (
  app_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.DeleteMicroApp */ http.delete<void>(
    `api/gateway/micro_app.installed_micro_app.DeleteMicroApp/api/micro_app/v1/installed_micro_app/${app_id}`,
    options
  );
