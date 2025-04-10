import { http, HttpOptions } from "@next-core/brick-http";

export interface TrafficLimitApi_SetLimitRateRequestBody {
  /** 上行速率（单位：k 或 m, 表示 Kbps 或 Mbps; 示例：100k 或 100m） */
  upload_limit?: string;

  /** 下行速率（单位：k 或 m, 表示 Kbps 或 Mbps; 示例：100k 或 100m） */
  download_limit?: string;

  /** 是否限制总量 */
  limit_total?: boolean;
}

/**
 * @description 设置配置项上行和下行限速值
 * @endpoint POST /api/sys_setting/v1/traffic_limit/:name
 */
export const TrafficLimitApi_setLimitRate = (
  name: string | number,
  data: TrafficLimitApi_SetLimitRateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.traffic_limit.SetLimitRate@1.0.0 */ http.post<void>(
    `api/gateway/logic.sys_setting/api/sys_setting/v1/traffic_limit/${name}`,
    data,
    options
  );
