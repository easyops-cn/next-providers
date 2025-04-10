import { ModelEffectiveTimeStatic, ModelEffectiveTimeCalendar } from ".";

/** 生效时间 */
export interface ModelEffectiveTime {
  /** 类型 */
  type: "static" | "calendar";

  /** static */
  static: Partial<ModelEffectiveTimeStatic>;

  /** calendar */
  calendar: Partial<ModelEffectiveTimeCalendar>;
}
