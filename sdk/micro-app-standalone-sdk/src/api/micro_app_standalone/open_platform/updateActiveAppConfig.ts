import { http, HttpOptions } from "@next-core/brick-http";

export interface OpenPlatformApi_UpdateActiveAppConfigRequestBody {
  /** 是否默认开通app */
  isDefaultActiveApp: boolean;
}

/**
 * @description 更新开通app的开关配置
 * @endpoint PUT /api/v1/open_platform/active_app_config
 */
export const OpenPlatformApi_updateActiveAppConfig = (
  data: OpenPlatformApi_UpdateActiveAppConfigRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.UpdateActiveAppConfig@1.0.0 */ http.put<void>(
    "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/active_app_config",
    data,
    options
  );
