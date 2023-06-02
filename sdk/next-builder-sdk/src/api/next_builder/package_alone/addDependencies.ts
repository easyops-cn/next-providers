import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";

export interface PackageAloneApi_AddDependenciesRequestBody {
  /** Dependencies */
  dependencies?: ModelMicroAppProject["dependencies"];
}

/**
 * @description 增加依赖
 * @endpoint POST /api/v1/next_builder/micro_apps/:instanceId/dependencies
 */
export const PackageAloneApi_addDependencies = (
  instanceId: string | number,
  data: PackageAloneApi_AddDependenciesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.package_alone.AddDependencies@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.package_alone.AddDependencies/api/v1/next_builder/micro_apps/${instanceId}/dependencies`,
    data,
    options
  );
