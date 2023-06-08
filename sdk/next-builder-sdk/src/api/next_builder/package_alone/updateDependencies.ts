import { http, HttpOptions } from "@next-core/brick-http";

export interface PackageAloneApi_UpdateDependenciesRequestBody {
  /** dependencyInfo */
  dependencyInfo?: PackageAloneApi_UpdateDependenciesRequestBody_dependencyInfo_item[];
}

/**
 * @description 更新依赖
 * @endpoint PUT /api/v1/next_builder/micro_apps/:instanceId/dependencies/version
 */
export const PackageAloneApi_updateDependencies = (
  instanceId: string | number,
  data: PackageAloneApi_UpdateDependenciesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.package_alone.UpdateDependencies@1.0.0 */ http.put<void>(
    `api/gateway/next_builder.package_alone.UpdateDependencies/api/v1/next_builder/micro_apps/${instanceId}/dependencies/version`,
    data,
    options
  );

export interface PackageAloneApi_UpdateDependenciesRequestBody_dependencyInfo_item {
  /** 依赖名称 */
  name?: string;

  /** actualVersion */
  actualVersion?: string;

  /** 是否使用最新开发版本 */
  isDeveloping?: boolean;
}
