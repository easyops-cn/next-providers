import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export interface AlertRuleApi_GetAlertRuleListRequestParams {
  /** 页数 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 如果指定此参数为monitor_v2,则查询的为新告警策略,否则为旧告警策略 */
  system?: "monitor_v2";

  /** 规则id, 多个用逗号分隔符 */
  _id__in?: string;

  /** 关联模型ID */
  objectId?: string;

  /** sdk限制字段使用 */
  XXX_RestFieldMask?: string[];
}

export interface AlertRuleApi_GetAlertRuleListResponseBody {
  /** code */
  code?: number;

  /** 分页大小 */
  page_size?: number;

  /** 页数 */
  page?: number;

  /** 总数 */
  total?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: Partial<ModelAlertRule>[];
}

/**
 * @description 获取告警规则列表
 * @endpoint GET /api/v3/alert_rule/config
 */
export const AlertRuleApi_getAlertRuleList = (
  params: AlertRuleApi_GetAlertRuleListRequestParams,
  options?: HttpOptions
): Promise<AlertRuleApi_GetAlertRuleListResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.GetAlertRuleList */ http.get<AlertRuleApi_GetAlertRuleListResponseBody>(
    "api/gateway/monitor.alert_rule.GetAlertRuleList/api/v3/alert_rule/config",
    { ...options, params }
  );
