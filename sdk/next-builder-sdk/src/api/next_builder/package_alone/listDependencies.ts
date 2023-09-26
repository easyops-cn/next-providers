import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface PackageAloneApi_ListDependenciesResponseItem {
  /** name */
  name?: string;

  /** Constraint */
  constraint?: string;

  /** IsLocalDeploy */
  localDeploy?: boolean;

  /** actualVersion */
  actualVersion?: string;

  /** 被谁依赖 */
  parentDependency?: string;

  /** 依赖方式 */
  dependencyWay?: "direct" | "indirect";

  /** 是否使用最新开发版本 */
  isDeveloping?: boolean;

  /** 版本是否存在, 仅判断前端组件NB、NT、brick_next等，不包括后端组件 */
  versionExists?: boolean;
}

export type PackageAloneApi_ListDependenciesResponseBody =
  ResponseListWrapper<PackageAloneApi_ListDependenciesResponseItem>;

/**
 * @description 微应用依赖列表
 * @endpoint LIST /api/v1/next_builder/micro_apps/:instanceId/dependencies
 */
export const PackageAloneApi_listDependencies = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<PackageAloneApi_ListDependenciesResponseBody> =>
  /**! @contract easyops.api.next_builder.package_alone.ListDependencies@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PackageAloneApi_ListDependenciesResponseBody>
    >(
      `api/gateway/next_builder.package_alone.ListDependencies/api/v1/next_builder/micro_apps/${instanceId}/dependencies`,
      options
    )
  ).data;
