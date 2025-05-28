import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_GetActiveAppConfigResponseBody {
  /** 是否默认开通app */
  isDefaultActiveApp?: boolean;
}

/**
 * @description 获取默认开通app的配置
 * @endpoint GET /api/v1/open_platform/active_app_config
 */
export const OpenPlatformApi_getActiveAppConfig = async (
  options?: HttpOptions
): Promise<OpenPlatformApi_GetActiveAppConfigResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.GetActiveAppConfig@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OpenPlatformApi_GetActiveAppConfigResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/active_app_config",
      options
    )
  ).data;
