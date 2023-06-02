import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 升级已小产品
 * @endpoint POST /api/micro_app/v1/installed_micro_app/upgrade/:packageName
 */
export const InstalledMicroAppApi_upgradeInstalledMicroApp = (
  packageName: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UpgradeInstalledMicroApp@1.0.0 */ http.post<void>(
    `api/gateway/micro_app.installed_micro_app.UpgradeInstalledMicroApp/api/micro_app/v1/installed_micro_app/upgrade/${packageName}`,
    undefined,
    options
  );
