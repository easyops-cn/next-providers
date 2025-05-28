import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 场景中心分类恢复出厂设置
 * @endpoint POST /api/v1/micro_app_standalone/scenario_category_factory_restore
 */
export const LaunchpadApi_scenarioCategoryFactoryRestore = (
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.launchpad.ScenarioCategoryFactoryRestore@1.0.0 */ http.post<void>(
    "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/scenario_category_factory_restore",
    undefined,
    options
  );
