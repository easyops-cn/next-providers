import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroappapiorchestration,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ReportInstalledMicroAppResultRequestBody {
  /** 已安装的小产品 */
  installedApps?: ReportInstalledMicroAppResultRequestBody_installedApps_item[];
}

export interface ReportInstalledMicroAppResultResponseBody {
  /** 数据列表 */
  list?: Partial<ModelInstalledMicroApp>[];
}

/**
 * @description 上报小产品安装或更新结果
 * @endpoint POST /api/micro_app/v1/installed_micro_app/report_result
 */
export const reportInstalledMicroAppResult = async (
  data: ReportInstalledMicroAppResultRequestBody,
  options?: HttpOptions
): Promise<ReportInstalledMicroAppResultResponseBody> =>
  (
    await http.post<
      ResponseBodyWrapper<ReportInstalledMicroAppResultResponseBody>
    >(
      "api/gateway/micro_app.report.ReportInstalledMicroAppResult/api/micro_app/v1/installed_micro_app/report_result",
      data,
      options
    )
  ).data;

export interface ReportInstalledMicroAppResultRequestBody_installedApps_item {
  /** 已安装的小产品id */
  microApp?: Partial<ModelInstalledMicroApp>;

  /** 小产品关联的桌面Id */
  containerId?: string;

  /** api编排列表 */
  apiList?: Partial<ModelMicroappapiorchestration>[];
}
