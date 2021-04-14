import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertEvent } from "../../../model/monitor";

export interface GetNotRecoverAlertEventListRequestParams {
  /** 开始时间, e.g.: -1h 过去1小时, -1d 过去1天, -30m 过去30分钟, 1490967693 unix 时间戳 */
  st?: string;

  /** 结束时间, e.g.: -1h 过去1小时, -1d 过去1天, -30m 过去30分钟, 1490967693 unix 时间戳。默认为当前时间 */
  et?: string;

  /** 搜索关键字 */
  key_word?: string;

  /** 告警类型 */
  alert_type?: string;

  /** 告警子类型 */
  alert_sub_type?: string;

  /** 告警项 */
  alert_item?: string;

  /** 模型id */
  objectId?: string;

  /** 实例id */
  instanceId?: string;

  /** 页码 */
  page?: number;

  /** 页大小, [1, 300] */
  page_size?: number;

  /** 排序 */
  __sortby__?: string;
}

export interface GetNotRecoverAlertEventListResponseBody {
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
 * @description 获取未恢复告警事件列表
 * @endpoint GET /api/v1/alert/alert_status_not_recover
 */
export const getNotRecoverAlertEventList = (
  params: GetNotRecoverAlertEventListRequestParams,
  options?: HttpOptions
): Promise<GetNotRecoverAlertEventListResponseBody> =>
  /**! @contract easyops.api.monitor.alert.GetNotRecoverAlertEventList */ http.get<GetNotRecoverAlertEventListResponseBody>(
    "api/gateway/monitor.alert.GetNotRecoverAlertEventList/api/v1/alert/alert_status_not_recover",
    { ...options, params }
  );
