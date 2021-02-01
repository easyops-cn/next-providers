import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export interface DetailAlertRuleResponseBody {
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
export const detailAlertRule = (
  id: string | number,
  options?: HttpOptions
): Promise<DetailAlertRuleResponseBody> =>
  http.get<DetailAlertRuleResponseBody>(
    `api/gateway/monitor.alert_rule.DetailAlertRule/api/v3/alert_rule/config/${id}`,
    options
  );
