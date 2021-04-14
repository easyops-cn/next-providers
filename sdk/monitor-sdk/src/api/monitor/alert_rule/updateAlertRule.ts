import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export type UpdateAlertRuleRequestBody = Partial<ModelAlertRule>;

export interface UpdateAlertRuleResponseBody {
  /** code */
  code?: number;

  /** msg */
  msg?: string;

  /** data */
  data?: UpdateAlertRuleResponseBody_data;
}

/**
 * @description 更新告警规则
 * @endpoint PUT /api/v3/alert_rule/config/:id
 */
export const updateAlertRule = (
  id: string | number,
  data: UpdateAlertRuleRequestBody,
  options?: HttpOptions
): Promise<UpdateAlertRuleResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.UpdateAlertRule */ http.put<UpdateAlertRuleResponseBody>(
    `api/gateway/monitor.alert_rule.UpdateAlertRule/api/v3/alert_rule/config/${id}`,
    data,
    options
  );

export interface UpdateAlertRuleResponseBody_data {
  /** 更新数量 */
  count?: number;
}
