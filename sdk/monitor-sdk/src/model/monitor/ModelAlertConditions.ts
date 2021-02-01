/** 告警条件 */
export interface ModelAlertConditions {
  /** 告警类型 */
  alert_type: string;

  /** 告警子类 */
  alert_sub_type: string;

  /** 告警指标表 */
  alert_table: string;

  /** 告警指标 */
  attr_id: string;

  /** 告警单位 */
  unit: string;

  /** 比较器 */
  comparators: ModelAlertConditions_comparators_item[];
}

export interface ModelAlertConditions_comparators_item {
  /** 比较器类型:
bigger_than: 大于
smaller_than: 小于
equal: 等于
unequal: 不等于
include: 包含（字符串指标用）
exclude: 不包含（字符串指标用)
dynamic: 动态阈值
transition: 状态变更
 */
  type?:
    | "bigger_than"
    | "smaller_than"
    | "equal"
    | "unequal"
    | "include"
    | "exclude"
    | "dynamic"
    | "transition";

  /** 阈值 */
  threshold?: any;

  /** 告警等级 */
  level?: 0 | 1 | 2;
}
