import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_EditWorkCalendarDayConfigRequestBody {
  /** 日期 */
  date: string;

  /** 是否休息日(1是,0否) */
  isOff: number;

  /** 时间范围 */
  hours: string;
}

export interface WorkCalendarApi_EditWorkCalendarDayConfigResponseBody {
  /** ID(objectId类型) */
  id?: string;
}

/**
 * @description 修改指定日期的配置
 * @endpoint PUT /api/sys_setting/v1/work/calendar_day/:id
 */
export const WorkCalendarApi_editWorkCalendarDayConfig = async (
  id: string | number,
  data: WorkCalendarApi_EditWorkCalendarDayConfigRequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_EditWorkCalendarDayConfigResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.EditWorkCalendarDayConfig@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<WorkCalendarApi_EditWorkCalendarDayConfigResponseBody>
    >(
      `api/gateway/sys_setting.work_calendar.EditWorkCalendarDayConfig/api/sys_setting/v1/work/calendar_day/${id}`,
      data,
      options
    )
  ).data;
