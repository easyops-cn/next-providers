import { ModelAlertDims } from ".";

/** 告警屏蔽规则 */
export interface ModelAlertDowntime {
  /** 告警屏蔽规则id */
  id: string;

  /** 告警规则 ID */
  alert_rule_id: string;

  /** 告警维度 */
  alert_dims: Partial<ModelAlertDims>[];

  /** 屏蔽时间段 */
  schedule: ModelAlertDowntime_schedule;

  /** 屏蔽原因 */
  reason: string;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: number;

  /** 最近一次改变时间 */
  mtime: number;

  /** org */
  org: number;
}

export interface ModelAlertDowntime_schedule {
  /** 屏蔽周期 */
  type?: string;

  /** 开始日期 */
  start_time?: string;

  /** 结束日期 */
  end_time?: string;

  /** 开始时间 */
  start_date?: string;

  /** 结束时间 */
  end_date?: string;

  /** 指定屏蔽的星期 */
  repeat_on?: string[];
}
