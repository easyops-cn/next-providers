import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的小产品信息 */
export interface InstalledMicroAppApi_UpdateInstalledMicroAppStatusRequestBody {
  /** 状态 */
  status?: "enabled" | "disabled" | "developing";
}

export type InstalledMicroAppApi_UpdateInstalledMicroAppStatusResponseBody =
  ModelInstalledMicroApp;

/**
 * @description 更新小产品信息
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id/status
 */
export const InstalledMicroAppApi_updateInstalledMicroAppStatus = async (
  app_id: string | number,
  data: InstalledMicroAppApi_UpdateInstalledMicroAppStatusRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_UpdateInstalledMicroAppStatusResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UpdateInstalledMicroAppStatus@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<InstalledMicroAppApi_UpdateInstalledMicroAppStatusResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroAppStatus/api/micro_app/v1/installed_micro_app/${app_id}/status`,
      data,
      options
    )
  ).data;
