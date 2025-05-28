import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ReportApi_GetLackingDependenciesRequestBody {
  /** 构件依赖 */
  bricks?: ReportApi_GetLackingDependenciesRequestBody_bricks_item[];

  /** template依赖 */
  templates?: ReportApi_GetLackingDependenciesRequestBody_templates_item[];

  /** 框架依赖 */
  core?: ReportApi_GetLackingDependenciesRequestBody_core_item[];

  /** 微应用静态资源依赖 */
  appResources?: ReportApi_GetLackingDependenciesRequestBody_appResources_item[];

  /** 获取单节点/集群的依赖 */
  toSingleNode?: boolean;
}

export interface ReportApi_GetLackingDependenciesResponseBody {
  /** 构件依赖 */
  bricks?: ReportApi_GetLackingDependenciesResponseBody_bricks_item[];

  /** template依赖 */
  templates?: ReportApi_GetLackingDependenciesResponseBody_templates_item[];

  /** 框架依赖 */
  core?: ReportApi_GetLackingDependenciesResponseBody_core_item[];

  /** 微应用静态资源依赖 */
  appResources?: ReportApi_GetLackingDependenciesResponseBody_appResources_item[];
}

/**
 * @description 获取缺少的依赖
 * @endpoint POST /api/v1/micro_app_standalone/report/lacking_dependencies
 */
export const ReportApi_getLackingDependencies = async (
  data: ReportApi_GetLackingDependenciesRequestBody,
  options?: HttpOptions
): Promise<ReportApi_GetLackingDependenciesResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.report.GetLackingDependencies@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ReportApi_GetLackingDependenciesResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/report/lacking_dependencies",
      data,
      options
    )
  ).data;

export interface ReportApi_GetLackingDependenciesRequestBody_bricks_item {
  /** 构件名 */
  name?: string;

  /** 构件版本 */
  version?: string;
}

export interface ReportApi_GetLackingDependenciesRequestBody_templates_item {
  /** template名 */
  name?: string;

  /** template版本 */
  version?: string;
}

export interface ReportApi_GetLackingDependenciesRequestBody_core_item {
  /** 框架名(通常是brick_next) */
  name?: string;

  /** 框架版本 */
  version?: string;
}

export interface ReportApi_GetLackingDependenciesRequestBody_appResources_item {
  /** 资源文件路径 */
  path?: string;

  /** md5值 */
  md5?: string;
}

export interface ReportApi_GetLackingDependenciesResponseBody_bricks_item {
  /** 构件名 */
  name?: string;

  /** 构件版本 */
  version?: string;
}

export interface ReportApi_GetLackingDependenciesResponseBody_templates_item {
  /** template名 */
  name?: string;

  /** template版本 */
  version?: string;
}

export interface ReportApi_GetLackingDependenciesResponseBody_core_item {
  /** 框架名(通常是brick_next) */
  name?: string;

  /** 框架版本 */
  version?: string;
}

export interface ReportApi_GetLackingDependenciesResponseBody_appResources_item {
  /** 资源文件路径 */
  path?: string;

  /** md5值 */
  md5?: string;
}
