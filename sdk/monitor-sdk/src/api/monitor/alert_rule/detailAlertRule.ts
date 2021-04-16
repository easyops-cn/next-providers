import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export interface AlertRuleApi_DetailAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: Partial<ModelAlertRule>;
}

/**
 * @description 获取告警规则详情
 * @endpoint GET /api/v3/alert_rule/config/:id
 */
export const AlertRuleApi_detailAlertRule = (
  id: string | number,
  options?: HttpOptions
): Promise<AlertRuleApi_DetailAlertRuleResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.DetailAlertRule */ http.get<AlertRuleApi_DetailAlertRuleResponseBody>(
    `api/gateway/monitor.alert_rule.DetailAlertRule/api/v3/alert_rule/config/${id}`,
    options
  );
