import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export type CreateAlertRuleRequestBody = Partial<ModelAlertRule>;

export interface CreateAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: CreateAlertRuleResponseBody_data;
}

/**
 * @description 创建告警规则
 * @endpoint POST /api/v3/alert_rule/config
 */
export const createAlertRule = (
  data: CreateAlertRuleRequestBody,
  options?: HttpOptions
): Promise<CreateAlertRuleResponseBody> =>
  http.post<CreateAlertRuleResponseBody>(
    "api/gateway/monitor.alert_rule.CreateAlertRule/api/v3/alert_rule/config",
    data,
    options
  );

export interface CreateAlertRuleResponseBody_data {
  /** 告警规则id */
  id?: string;
}
