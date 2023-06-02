import { ModelAlertEvent } from ".";

/** 告警状态 */
export interface ModelAlertRange {
  /** org */
  org: number;

  /** 告警事件Id */
  key: string;

  /** 最近一次告警详情 */
  first_alert: Partial<ModelAlertEvent>;

  /** 第一次告警时间 */
  alert_begin_time: number;
}
