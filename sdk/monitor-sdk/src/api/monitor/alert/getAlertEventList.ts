import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertEvent } from "../../../model/monitor";

export interface AlertApi_GetAlertEventListRequestParams {
  /** 告警 ID */
  _id?: string;

  /** 选择返回的字段，以逗号分隔 */
  __select__?: string;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 模型id */
  objectId?: string;

  /** 实例id */
  instanceId?: string;

  /** 告警策略ID */
  rule_id?: string;

  /** 开始时间, e.g.: -1h 过去1小时, -1d 过去1天, -30m 过去30分钟, 1490967693 unix 时间戳 */
  st?: string;

  /** 结束时间, e.g.: -1h 过去1小时, -1d 过去1天, -30m 过去30分钟, 1490967693 unix 时间戳。默认为当前时间 */
  et?: string;
}

export interface AlertApi_GetAlertEventListResponseBody {
  /** 返回码 */
  code?: number;

  /** 消息 */
  msg?: string;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 总数 */
  total?: number;

  /** 告警事件列表 */
  data?: Partial<ModelAlertEvent>[];
}

/**
 * @description 获取告警事件列表
 * @endpoint GET /api/v1/alert
 */
export const AlertApi_getAlertEventList = (
  params: AlertApi_GetAlertEventListRequestParams,
  options?: HttpOptions
): Promise<AlertApi_GetAlertEventListResponseBody> =>
  /**! @contract easyops.api.monitor.alert.GetAlertEventList */ http.get<AlertApi_GetAlertEventListResponseBody>(
    "api/gateway/monitor.alert.GetAlertEventList/api/v1/alert",
    { ...options, params }
  );
