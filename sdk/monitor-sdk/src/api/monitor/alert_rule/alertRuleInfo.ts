import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAlertRule } from "../../../model/monitor";

export interface AlertRuleInfoRequestParams {
  /** 告警类型 */
  alert_type_id: string;

  /** 表名 */
  table: string;

  /** 告警子类型 */
  alert_sub_type_id: string;
}

export interface AlertRuleInfoResponseBody {
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
  data?: AlertRuleInfoResponseBody_data;
}

/**
 * @description 根据告警类型，表名获取相关信息
 * @endpoint GET /api/v3/alert_rule/info
 */
export const alertRuleInfo = (
  params: AlertRuleInfoRequestParams,
  options?: HttpOptions
): Promise<AlertRuleInfoResponseBody> =>
  /**! @contract easyops.api.monitor.alert_rule.AlertRuleInfo */ http.get<AlertRuleInfoResponseBody>(
    "api/gateway/monitor.alert_rule.AlertRuleInfo/api/v3/alert_rule/info",
    { ...options, params }
  );

export interface AlertRuleInfoResponseBody_data {
  /** 告警通知模板 */
  templates?: ModelAlertRule["templates"];

  /** 内置变量 */
  macros?: AlertRuleInfoResponseBody_data_macros_item[];

  /** 关联指标列表 */
  metrics?: AlertRuleInfoResponseBody_data_metrics_item[];

  /** 关联维度列表 */
  dims?: AlertRuleInfoResponseBody_data_dims_item[];

  /** 通知用户组列表 */
  receiver_owner_groups?: AlertRuleInfoResponseBody_data_receiver_owner_groups_item[];

  /** 自定义变量列表 */
  custom_fields?: AlertRuleInfoResponseBody_data_custom_fields_item[];

  /** 比较器列表 */
  comparators?: string[];
}

export interface AlertRuleInfoResponseBody_data_macros_item {
  /** 变量名称 */
  name?: string;

  /** 描述 */
  description?: string;
}

export interface AlertRuleInfoResponseBody_data_metrics_item {
  /** 指标类型 */
  value_type?: string;

  /** 指标名称 */
  name?: string;

  /** 指标单位 */
  unit?: string;

  /** 描述 */
  description?: string;
}

export interface AlertRuleInfoResponseBody_data_dims_item {
  /** 模型字段名称 */
  object_key?: string;

  /** 指标名称 */
  name?: string;

  /** 模型ID */
  object_id?: string;

  /** 描述 */
  description?: string;
}

export interface AlertRuleInfoResponseBody_data_receiver_owner_groups_item {
  /** 说明 */
  translate?: string;

  /** 模型字段ID */
  object_attr_id?: string;

  /** 模型ID */
  object_id?: string;
}

export interface AlertRuleInfoResponseBody_data_custom_fields_item {
  /** 变量名称 */
  name?: string;

  /** 原始字段名称 */
  field_name?: string;

  /** 变量类型 */
  value_type?: string;

  /** 单位 */
  unit?: string;

  /** 描述 */
  description?: string;
}
