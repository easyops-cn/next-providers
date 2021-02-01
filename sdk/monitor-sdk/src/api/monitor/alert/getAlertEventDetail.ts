import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertEvent } from "../../../model/monitor";

export interface GetAlertEventDetailRequestParams {
  /** 告警 ID */
  _id?: string;

  /** 开始时间, e.g.: -1h 过去1小时, -1d 过去1天, -30m 过去30分钟, 1490967693 unix 时间戳 */
  st?: string;

  /** 结束时间, e.g.: -1h 过去1小时, -1d 过去1天, -30m 过去30分钟, 1490967693 unix 时间戳。默认为当前时间 */
  et?: string;
}

export interface GetAlertEventDetailResponseBody {
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

  /** 告警事件列表，返回的是一个列表，只有一个告警事件的列表当作详情接口的返回 */
  data?: Partial<ModelAlertEvent>[];
}

/**
 * @description 获取告警事件详情
 * @endpoint GET /api/v1/alert
 */
export const getAlertEventDetail = (
  params: GetAlertEventDetailRequestParams,
  options?: HttpOptions
): Promise<GetAlertEventDetailResponseBody> =>
  http.get<GetAlertEventDetailResponseBody>(
    "api/gateway/monitor.alert.GetAlertEventDetail/api/v1/alert",
    { ...options, params }
  );
