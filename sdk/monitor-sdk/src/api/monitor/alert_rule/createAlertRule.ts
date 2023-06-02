import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export type AlertRuleApi_CreateAlertRuleRequestBody = Partial<ModelAlertRule>;

export interface AlertRuleApi_CreateAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: AlertRuleApi_CreateAlertRuleResponseBody_data;
}

/**
 * @description 创建告警规则
 * @endpoint POST /api/v3/alert_rule/config
 */
export const AlertRuleApi_createAlertRule = (
  data: AlertRuleApi_CreateAlertRuleRequestBody,
  options?: HttpOptions
): Promise<AlertRuleApi_CreateAlertRuleResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.CreateAlertRule@1.0.0 */ http.post<AlertRuleApi_CreateAlertRuleResponseBody>(
    "api/gateway/monitor.alert_rule.CreateAlertRule/api/v3/alert_rule/config",
    data,
    options
  );

export interface AlertRuleApi_CreateAlertRuleResponseBody_data {
  /** 告警规则id */
  id?: string;
}
