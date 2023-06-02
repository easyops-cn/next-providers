import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export type AlertRuleApi_UpdateAlertRuleRequestBody = Partial<ModelAlertRule>;

export interface AlertRuleApi_UpdateAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: AlertRuleApi_UpdateAlertRuleResponseBody_data;
}

/**
 * @description 更新告警规则
 * @endpoint PUT /api/v3/alert_rule/config/:id
 */
export const AlertRuleApi_updateAlertRule = (
  id: string | number,
  data: AlertRuleApi_UpdateAlertRuleRequestBody,
  options?: HttpOptions
): Promise<AlertRuleApi_UpdateAlertRuleResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.UpdateAlertRule@1.0.0 */ http.put<AlertRuleApi_UpdateAlertRuleResponseBody>(
    `api/gateway/monitor.alert_rule.UpdateAlertRule/api/v3/alert_rule/config/${id}`,
    data,
    options
  );

export interface AlertRuleApi_UpdateAlertRuleResponseBody_data {
  /** 更新数量 */
  count?: number;
}
