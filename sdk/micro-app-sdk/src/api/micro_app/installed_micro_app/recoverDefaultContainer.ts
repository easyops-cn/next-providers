import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_RecoverDefaultContainerResponseBody {
  /** 默认容器 */
  defaultContailer?: string;
}

/**
 * @description 恢复默认容器
 * @endpoint POST /api/micro_app/v1/installed_micro_app/recover_default_container/:app_id
 */
export const InstalledMicroAppApi_recoverDefaultContainer = async (
  app_id: string | number,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_RecoverDefaultContainerResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.RecoverDefaultContainer@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_RecoverDefaultContainerResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.RecoverDefaultContainer/api/micro_app/v1/installed_micro_app/recover_default_container/${app_id}`,
      undefined,
      options
    )
  ).data;
