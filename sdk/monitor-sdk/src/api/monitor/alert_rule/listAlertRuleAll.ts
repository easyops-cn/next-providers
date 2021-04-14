import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export interface ListAlertRuleAllRequestParams {
  /** 如果指定此参数为monitor_v2,则查询的为新告警策略,否则为旧告警策略 */
  system?: "monitor_v2";

  /** sdk限制字段使用 */
  XXX_RestFieldMask?: string[];
}

export interface ListAlertRuleAllResponseBody {
  /** code */
  code: number;

  /** msg */
  msg: string;

  /** 总数 */
  total: number;

  /** 页数 */
  page: number;

  /** 分页大小 */
  page_size: number;

  /** data */
  data: Partial<ModelAlertRule>[];
}

/**
 * @description 获取全部告警规则列表
 * @endpoint GET /api/v3/alert_rule/config/all
 */
export const listAlertRuleAll = (
  params: ListAlertRuleAllRequestParams,
  options?: HttpOptions
): Promise<ListAlertRuleAllResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.ListAlertRuleAll */ http.get<ListAlertRuleAllResponseBody>(
    "api/gateway/monitor.alert_rule.ListAlertRuleAll/api/v3/alert_rule/config/all",
    { ...options, params }
  );
