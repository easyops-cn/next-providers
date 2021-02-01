import { http, HttpOptions } from "@next-core/brick-http";

export interface DisableAlertRuleRequestBody {
  /** 是否禁用 */
  disabled?: boolean;
}

export interface DisableAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: DisableAlertRuleResponseBody_data;
}

/**
 * @description 禁/启用告警规则
 * @endpoint PUT /api/v3/alert_rule/disabled/:id
 */
export const disableAlertRule = (
  id: string | number,
  data: DisableAlertRuleRequestBody,
  options?: HttpOptions
): Promise<DisableAlertRuleResponseBody> =>
  http.put<DisableAlertRuleResponseBody>(
    `api/gateway/monitor.alert_rule.DisableAlertRule/api/v3/alert_rule/disabled/${id}`,
    data,
    options
  );

export interface DisableAlertRuleResponseBody_data {
  /** 更新数量 */
  count?: number;
}
