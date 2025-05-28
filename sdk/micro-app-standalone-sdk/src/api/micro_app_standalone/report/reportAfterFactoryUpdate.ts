import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 更新出厂设置后上报数据
 * @endpoint POST /api/v1/report/after_factory_update
 */
export const ReportApi_reportAfterFactoryUpdate = (
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.report.ReportAfterFactoryUpdate@1.0.0 */ http.post<void>(
    "api/gateway/logic.micro_app_standalone_service/api/v1/report/after_factory_update",
    undefined,
    options
  );
