import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 要更新的小产品信息 */
export interface UpdateInstalledMicroAppStatusRequestBody {
  /** 状态 */
  status?: "enabled" | "disabled" | "developing";
}

export type UpdateInstalledMicroAppStatusResponseBody = ModelInstalledMicroApp;

/**
 * @description 更新小产品信息
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id/status
 */
export const updateInstalledMicroAppStatus = async (
  app_id: string | number,
  data: UpdateInstalledMicroAppStatusRequestBody,
  options?: HttpOptions
): Promise<UpdateInstalledMicroAppStatusResponseBody> =>
  (
    await http.put<
      ResponseBodyWrapper<UpdateInstalledMicroAppStatusResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroAppStatus/api/micro_app/v1/installed_micro_app/${app_id}/status`,
      data,
      options
    )
  ).data;
