/** 营业时间日历配置 */
export interface ModelWorkDay {
  /** 具体日期 */
  date: string;

  /** 是否休假(1是,0否) */
  isOff: number;

  /** 时间范围(09:00~12:00;14:00~18:00) */
  workHours: string;

  /** 休假时间，同上 */
  offHours: string;
}
