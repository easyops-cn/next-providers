import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的小产品信息 */
export interface InstalledMicroAppApi_UpdateInstalledMicroAppStoryboardJsonRequestBody {
  /** 小产品配置信息 */
  storyboardJson?: string;
}

export type InstalledMicroAppApi_UpdateInstalledMicroAppStoryboardJsonResponseBody =
  ModelInstalledMicroApp;

/**
 * @description 更新小产品配置信息
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id/storyboardJson
 */
export const InstalledMicroAppApi_updateInstalledMicroAppStoryboardJson =
  async (
    app_id: string | number,
    data: InstalledMicroAppApi_UpdateInstalledMicroAppStoryboardJsonRequestBody,
    options?: HttpOptions
  ): Promise<InstalledMicroAppApi_UpdateInstalledMicroAppStoryboardJsonResponseBody> =>
    /**! @contract easyops.api.micro_app.installed_micro_app.UpdateInstalledMicroAppStoryboardJson@1.0.0 */ (
      await http.put<
        ResponseBodyWrapper<InstalledMicroAppApi_UpdateInstalledMicroAppStoryboardJsonResponseBody>
      >(
        `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroAppStoryboardJson/api/micro_app/v1/installed_micro_app/${app_id}/storyboardJson`,
        data,
        options
      )
    ).data;
