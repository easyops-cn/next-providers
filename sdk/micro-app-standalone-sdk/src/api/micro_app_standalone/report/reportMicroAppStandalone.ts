import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroAppStandalone } from "../../../model/micro_app_standalone";

export type ReportApi_ReportMicroAppStandaloneRequestBody =
  Partial<ModelInstalledMicroAppStandalone> &
    ReportApi_ReportMicroAppStandaloneRequestBody_2;

/**
 * @description 上报独立打包小产品
 * @endpoint POST /api/v1/micro_app_standalone/report
 */
export const ReportApi_reportMicroAppStandalone = (
  data: ReportApi_ReportMicroAppStandaloneRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.report.ReportMicroAppStandalone@1.0.1 */ http.post<void>(
    "api/gateway/micro_app_standalone.report.ReportMicroAppStandalone/api/v1/micro_app_standalone/report",
    data,
    options
  );

export interface ReportApi_ReportMicroAppStandaloneRequestBody_2 {
  /** 是否设置为启用版本 */
  setActiveVersion?: boolean;
}
