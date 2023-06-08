import { http, HttpOptions } from "@next-core/brick-http";

export interface PackageAloneApi_AddDependenciesRequestBody {
  /** Dependencies */
  dependencies?: PackageAloneApi_AddDependenciesRequestBody_dependencies_item[];
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

export interface PackageAloneApi_AddDependenciesRequestBody_dependencies_item {
  /** Name */
  name?: string;

  /** Constraint */
  constraint?: string;

  /** IsLocalDeploy */
  localDeploy?: boolean;

  /** actualVersion */
  actualVersion?: string;

  /** 是否使用最新开发版本 */
  isDeveloping?: boolean;
}
