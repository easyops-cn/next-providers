import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除小产品与桌面关系
 * @endpoint DELETE /api/micro_app/v1/installed_micro_app/:app_id/container
 */
export const InstalledMicroAppApi_deleteInstalledMicroAppContainer = (
  app_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.DeleteInstalledMicroAppContainer@1.0.0 */ http.delete<void>(
    `api/gateway/micro_app.installed_micro_app.DeleteInstalledMicroAppContainer/api/micro_app/v1/installed_micro_app/${app_id}/container`,
    options
  );
