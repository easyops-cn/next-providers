import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TrafficLimitApi_GetLimitRateResponseBody {
  /** 上行速率（单位：k 或 m, 表示 Kbps 或 Mbps; 示例：100k 或 100m） */
  upload_limit?: string;

  /** 下行速率（单位：k 或 m, 表示 Kbps 或 Mbps; 示例：100k 或 100m） */
  download_limit?: string;
}

/**
 * @description 获取配置项上行和下行限速值
 * @endpoint GET /api/sys_setting/v1/traffic_limit/:name
 */
export const TrafficLimitApi_getLimitRate = async (
  name: string | number,
  options?: HttpOptions
): Promise<TrafficLimitApi_GetLimitRateResponseBody> =>
  /**! @contract easyops.api.sys_setting.traffic_limit.GetLimitRate@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<TrafficLimitApi_GetLimitRateResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/traffic_limit/${name}`,
      options
    )
  ).data;
