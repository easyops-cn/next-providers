import { http, HttpOptions } from "@next-core/brick-http";

export interface AlertRuleApi_DeleteAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: Record<string, any>;
}

/**
 * @description 删除告警规则
 * @endpoint DELETE /api/v3/alert_rule/config/:id
 */
export const AlertRuleApi_deleteAlertRule = (
  id: string | number,
  options?: HttpOptions
): Promise<AlertRuleApi_DeleteAlertRuleResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.DeleteAlertRule */ http.delete<AlertRuleApi_DeleteAlertRuleResponseBody>(
    `api/gateway/monitor.alert_rule.DeleteAlertRule/api/v3/alert_rule/config/${id}`,
    options
  );
