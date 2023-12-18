import { ModelWorkDayConfig } from ".";

/** 营业时间日历配置 */
export interface ModelWorkCalendarConfig {
  /** 编辑模式 */
  mode: string;

  /** 工作日配置 */
  workDayList: ModelWorkCalendarConfig_workDayList_item[];

  /** 假期配置 */
  holidayList: Partial<ModelWorkDayConfig>[];

  /** 补班配置 */
  extraDayList: Partial<ModelWorkDayConfig>[];

  /** 独立日配置 */
  independenceDayList: ModelWorkCalendarConfig_independenceDayList_item[];
}

export interface ModelWorkCalendarConfig_workDayList_item {
  /** 星期(0~6) */
  weekday?: number;

  /** 工作时间(09:00~12:00;14:00~18:00) */
  hours?: string;
}

export interface ModelWorkCalendarConfig_independenceDayList_item {
  /** 具体日期 */
  date?: string;

  /** 是否休假(1是,0否) */
  isOff?: number;

  /** 时间范围(09:00~12:00;14:00~18:00) */
  hours?: string;
}
