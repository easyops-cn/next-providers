/** 生效时间静态结构 */
export interface ModelEffectiveTimeStatic {
  /** 需要通知的日期,0-6,分别对应周日至周一 */
  dayOfWeek: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];

  /** 通知生效开始时间 */
  dayStartTime: string;

  /** 通知生效结束时间 */
  dayEndTime: string;

  /** 时间范围 */
  dayTimeRange: ModelEffectiveTimeStatic_dayTimeRange_item[];
}

export interface ModelEffectiveTimeStatic_dayTimeRange_item {
  /** 开始时间 */
  dayStartTime?: string;

  /** 结束时间 */
  dayEndTime?: string;
}
