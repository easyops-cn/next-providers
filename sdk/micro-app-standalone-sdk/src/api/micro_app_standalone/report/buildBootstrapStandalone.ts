import { http, HttpOptions } from "@next-core/brick-http";

export interface ReportApi_BuildBootstrapStandaloneRequestBody {
  /** 微应用Id */
  appId: string;

  /** storyboard json (支持多个打包) */
  storyboards?: Record<string, any>[];

  /** 依赖名称 */
  dependencies?: ReportApi_BuildBootstrapStandaloneRequestBody_dependencies;

  /** 是否免登录 */
  noAuth?: boolean;

  /** 是否push到单节点：默认false */
  toSingleNode?: boolean;
}

/**
 * @description 构建standalone app的bootstrap
 * @endpoint POST /api/v1/micro_app_standalone/build_boostrap_standalone
 */
export const ReportApi_buildBootstrapStandalone = (
  data: ReportApi_BuildBootstrapStandaloneRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.report.BuildBootstrapStandalone@1.0.0 */ http.post<void>(
    "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/build_boostrap_standalone",
    data,
    options
  );

export interface ReportApi_BuildBootstrapStandaloneRequestBody_dependencies {
  /** 构件依赖 */
  bricks?: ReportApi_BuildBootstrapStandaloneRequestBody_dependencies_bricks_item[];

  /** template依赖 */
  templates?: ReportApi_BuildBootstrapStandaloneRequestBody_dependencies_templates_item[];

  /** 框架依赖 */
  core?: ReportApi_BuildBootstrapStandaloneRequestBody_dependencies_core_item[];
}

export interface ReportApi_BuildBootstrapStandaloneRequestBody_dependencies_bricks_item {
  /** 构件名 */
  name?: string;

  /** 构件版本 */
  version?: string;
}

export interface ReportApi_BuildBootstrapStandaloneRequestBody_dependencies_templates_item {
  /** template名 */
  name?: string;

  /** template版本 */
  version?: string;
}

export interface ReportApi_BuildBootstrapStandaloneRequestBody_dependencies_core_item {
  /** 框架名(通常是brick_next) */
  name?: string;

  /** 框架版本 */
  version?: string;
}
