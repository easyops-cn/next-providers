import { http, HttpOptions } from "@next-core/brick-http";

/** 要更新的小产品信息 */
export interface InstalledMicroAppApi_UpdateInstalledMicroAppUserConfigRequestBody {
  /** 用户配置 */
  userConfig?: string;
}

/**
 * @description 更新小产品用户配置
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id/userConfig
 */
export const InstalledMicroAppApi_updateInstalledMicroAppUserConfig = (
  app_id: string | number,
  data: InstalledMicroAppApi_UpdateInstalledMicroAppUserConfigRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UpdateInstalledMicroAppUserConfig */ http.put<void>(
    `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroAppUserConfig/api/micro_app/v1/installed_micro_app/${app_id}/userConfig`,
    data,
    options
  );
