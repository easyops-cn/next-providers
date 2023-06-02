import { http, HttpOptions } from "@next-core/brick-http";

export interface PackageAloneApi_DeleteDependenciesRequestParams {
  /** dependenciesName, 多个用,分割 */
  dependenciesName?: string;
}

/**
 * @description 删除依赖
 * @endpoint DELETE /api/v1/next_builder/micro_apps/:instanceId/dependencies
 */
export const PackageAloneApi_deleteDependencies = (
  instanceId: string | number,
  params: PackageAloneApi_DeleteDependenciesRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.package_alone.DeleteDependencies@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.package_alone.DeleteDependencies/api/v1/next_builder/micro_apps/${instanceId}/dependencies`,
    { ...options, params }
  );
