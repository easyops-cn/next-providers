import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的小产品信息 */
export interface UpdateInstalledMicroAppStoryboardJsonRequestBody {
  /** 小产品配置信息 */
  storyboardJson?: string;
}

export type UpdateInstalledMicroAppStoryboardJsonResponseBody = ModelInstalledMicroApp;

/**
 * @description 更新小产品配置信息
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id/storyboardJson
 */
export const updateInstalledMicroAppStoryboardJson = async (
  app_id: string | number,
  data: UpdateInstalledMicroAppStoryboardJsonRequestBody,
  options?: HttpOptions
): Promise<UpdateInstalledMicroAppStoryboardJsonResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UpdateInstalledMicroAppStoryboardJson */ (
    await http.put<
      ResponseBodyWrapper<UpdateInstalledMicroAppStoryboardJsonResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroAppStoryboardJson/api/micro_app/v1/installed_micro_app/${app_id}/storyboardJson`,
      data,
      options
    )
  ).data;
