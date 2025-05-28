import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 解决方案分类恢复出厂设置
 * @endpoint POST /api/v1/micro_app_standalone/solution_category_factory_restore
 */
export const LaunchpadApi_solutionCategoryFactoryRestore = (
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.launchpad.SolutionCategoryFactoryRestore@1.0.0 */ http.post<void>(
    "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/solution_category_factory_restore",
    undefined,
    options
  );
