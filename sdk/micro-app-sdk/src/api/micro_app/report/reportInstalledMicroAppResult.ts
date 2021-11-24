import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroappapiorchestration,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ReportApi_ReportInstalledMicroAppResultRequestBody {
  /** 已安装的小产品 */
  installedApps?: ReportApi_ReportInstalledMicroAppResultRequestBody_installedApps_item[];
}

export interface ReportApi_ReportInstalledMicroAppResultResponseBody {
  /** 数据列表 */
  list?: Partial<ModelInstalledMicroApp>[];
}

/**
 * @description 上报小产品安装或更新结果
 * @endpoint POST /api/micro_app/v1/installed_micro_app/report_result
 */
export const ReportApi_reportInstalledMicroAppResult = async (
  data: ReportApi_ReportInstalledMicroAppResultRequestBody,
  options?: HttpOptions
): Promise<ReportApi_ReportInstalledMicroAppResultResponseBody> =>
  /**! @contract easyops.api.micro_app.report.ReportInstalledMicroAppResult@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ReportApi_ReportInstalledMicroAppResultResponseBody>
    >(
      "api/gateway/micro_app.report.ReportInstalledMicroAppResult/api/micro_app/v1/installed_micro_app/report_result",
      data,
      options
    )
  ).data;

export interface ReportApi_ReportInstalledMicroAppResultRequestBody_installedApps_item {
  /** 已安装的小产品id */
  microApp?: Partial<ModelInstalledMicroApp>;

  /** 小产品关联的桌面Id */
  containerId?: string;

  /** api编排列表 */
  apiList?: Partial<ModelMicroappapiorchestration>[];
}
