/** 生效时间日历结构 */
export interface ModelEffectiveTimeCalendar {
  /** 日历ID */
  calendarId: string;

  /** 通知日期 */
  dayOfCalendar: string;

  /** 生效时间段，工作日分为allDay/onWork，节假日分为allDay/nonRest */
  period: string;
}
