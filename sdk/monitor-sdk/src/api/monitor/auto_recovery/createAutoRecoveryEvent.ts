import { http, HttpOptions } from "@next-core/brick-http";

export interface AutoRecoveryApi_CreateAutoRecoveryEventRequestBody {
  /** 告警自愈事件源 */
  source?: string;

  /** 描述 */
  desc?: string;

  /** 分页大小 */
  url?: string;

  /** 自愈事件 */
  event?: Record<string, any>;
}

export interface AutoRecoveryApi_CreateAutoRecoveryEventResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: AutoRecoveryApi_CreateAutoRecoveryEventResponseBody_data;
}

/**
 * @description 创建告警自愈事件
 * @endpoint POST /api/v1/auto_recovery/event
 */
export const AutoRecoveryApi_createAutoRecoveryEvent = (
  data: AutoRecoveryApi_CreateAutoRecoveryEventRequestBody,
  options?: HttpOptions
): Promise<AutoRecoveryApi_CreateAutoRecoveryEventResponseBody> =>
  /**! @contract easyops.api.monitor.auto_recovery.CreateAutoRecoveryEvent@1.0.0 */ http.post<AutoRecoveryApi_CreateAutoRecoveryEventResponseBody>(
    "api/gateway/monitor.auto_recovery.CreateAutoRecoveryEvent/api/v1/auto_recovery/event",
    data,
    options
  );

export interface AutoRecoveryApi_CreateAutoRecoveryEventResponseBody_data {
  /** 告警自愈历史id列表 */
  id?: string[];
}
