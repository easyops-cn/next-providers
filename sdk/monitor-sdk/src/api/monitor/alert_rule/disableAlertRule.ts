import { http, HttpOptions } from "@next-core/brick-http";

export interface AlertRuleApi_DisableAlertRuleRequestBody {
  /** 是否禁用 */
  disabled?: boolean;
}

export interface AlertRuleApi_DisableAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: AlertRuleApi_DisableAlertRuleResponseBody_data;
}

/**
 * @description 禁/启用告警规则
 * @endpoint PUT /api/v3/alert_rule/disabled/:id
 */
export const AlertRuleApi_disableAlertRule = (
  id: string | number,
  data: AlertRuleApi_DisableAlertRuleRequestBody,
  options?: HttpOptions
): Promise<AlertRuleApi_DisableAlertRuleResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.DisableAlertRule */ http.put<AlertRuleApi_DisableAlertRuleResponseBody>(
    `api/gateway/monitor.alert_rule.DisableAlertRule/api/v3/alert_rule/disabled/${id}`,
    data,
    options
  );

export interface AlertRuleApi_DisableAlertRuleResponseBody_data {
  /** 更新数量 */
  count?: number;
}
