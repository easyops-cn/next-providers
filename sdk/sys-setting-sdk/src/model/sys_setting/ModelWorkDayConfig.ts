/** 营业时间日历配置 */
export interface ModelWorkDayConfig {
  /** 起始日期 */
  from: string;

  /** 结束日期 */
  to: string;

  /** 备注 */
  memo: string;

  /** 时间范围(09:00~12:00;14:00~18:00) */
  hours: string;
}
