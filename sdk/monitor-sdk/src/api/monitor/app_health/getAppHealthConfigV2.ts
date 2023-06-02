import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAppHealthConfig } from "../../../model/monitor_config";

export interface AppHealthApi_GetAppHealthConfigV2ResponseBody {
  /** 返回码 */
  code?: number;

  /** 返回信息 */
  msg?: string;

  /** 返回数据 */
  data?: Partial<ModelAppHealthConfig>;
}

/**
 * @description 获取应用评分配置v2
 * @endpoint get /api/v2/app_health/config/:app_id
 */
export const AppHealthApi_getAppHealthConfigV2 = (
  app_id: string | number,
  options?: HttpOptions
): Promise<AppHealthApi_GetAppHealthConfigV2ResponseBody> =>
  /**! @contract easyops.api.monitor.app_health.GetAppHealthConfigV2@1.0.0 */ http.get<AppHealthApi_GetAppHealthConfigV2ResponseBody>(
    `api/gateway/monitor.app_health.GetAppHealthConfigV2/api/v2/app_health/config/${app_id}`,
    options
  );
