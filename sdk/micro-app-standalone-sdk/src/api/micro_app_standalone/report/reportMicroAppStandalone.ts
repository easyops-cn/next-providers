import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ModelInstalledMicroAppStandalone } from "../../../model/micro_app_standalone";
import { ResponseBodyWrapper } from "../../../wrapper";

export type ReportApi_ReportMicroAppStandaloneRequestBody =
  Partial<ModelInstalledMicroAppStandalone> &
    ReportApi_ReportMicroAppStandaloneRequestBody_2;

export interface ReportApi_ReportMicroAppStandaloneResponseBody {
  /** 是否跳过升级 */
  skipUpdate?: boolean;

  /** report app id */
  appId?: string;
}

/**
 * @description 上报独立打包小产品
 * @endpoint POST /api/v1/micro_app_standalone/report
 */
export const ReportApi_reportMicroAppStandalone = async (
  data: ReportApi_ReportMicroAppStandaloneRequestBody,
  options?: HttpOptions
): Promise<ReportApi_ReportMicroAppStandaloneResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.report.ReportMicroAppStandalone@1.0.1 */ (
    await http.post<
      ResponseBodyWrapper<ReportApi_ReportMicroAppStandaloneResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/report",
      data,
      options
    )
  ).data;

export interface ReportApi_ReportMicroAppStandaloneRequestBody_2 {
  /** 是否使用公共依赖 */
  usePublicDependencies?: any;

  /** 元数据定义（当前用于获取菜单信息） */
  meta?: string;

  /** 是否设置为启用版本 */
  setActiveVersion?: boolean;

  /** 默认容器 */
  defaultContainer?: ModelInstalledMicroApp["defaultContainer"];

  /** 应用描述 */
  description?: string;

  /** 应用作者 */
  author?: string[];

  /** 是否是联合app升级方式：当前有两种：联合app升级/单个sa-na升级 */
  isFromUnionApp?: boolean;
}
