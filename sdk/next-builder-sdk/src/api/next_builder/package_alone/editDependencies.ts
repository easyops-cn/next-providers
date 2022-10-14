import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppProject } from "../../../model/next_builder";

export interface PackageAloneApi_EditDependenciesRequestBody {
  /** Dependencies */
  dependencies?: ModelMicroAppProject["dependencies"];
}

/**
 * @description 编辑依赖
 * @endpoint PUT /api/v1/next_builder/micro_apps/:instanceId/dependencies
 */
export const PackageAloneApi_editDependencies = (
  instanceId: string | number,
  data: PackageAloneApi_EditDependenciesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.package_alone.EditDependencies@1.0.0 */ http.put<void>(
    `api/gateway/next_builder.package_alone.EditDependencies/api/v1/next_builder/micro_apps/${instanceId}/dependencies`,
    data,
    options
  );
