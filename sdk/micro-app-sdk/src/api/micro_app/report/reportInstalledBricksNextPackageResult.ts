import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledBricksNextPackage } from "../../../model/micro_app";

export interface ReportApi_ReportInstalledBricksNextPackageResultRequestBody {
  /** 已安装的小产品NB和NT包 */
  installedPackages?: Partial<ModelInstalledBricksNextPackage>[];
}

/**
 * @description 上报小产品NB和NT包安装或更新结果
 * @endpoint POST /api/micro_app/v1/installed_bricks_next_package/report_result
 */
export const ReportApi_reportInstalledBricksNextPackageResult = (
  data: ReportApi_ReportInstalledBricksNextPackageResultRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.report.ReportInstalledBricksNextPackageResult@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.report.ReportInstalledBricksNextPackageResult/api/micro_app/v1/installed_bricks_next_package/report_result",
    data,
    options
  );
