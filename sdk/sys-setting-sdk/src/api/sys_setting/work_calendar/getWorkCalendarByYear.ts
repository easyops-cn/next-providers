import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_GetWorkCalendarByYearRequestParams {
  /** 年份(默认为当前年份) */
  year?: number;
}

export interface WorkCalendarApi_GetWorkCalendarByYearResponseBody {
  /** ID(objectId类型) */
  id?: string;

  /** 月份统计 */
  statistic?: WorkCalendarApi_GetWorkCalendarByYearResponseBody_statistic_item[];
}

/**
 * @description 获取日历的按年查看统计
 * @endpoint GET /api/sys_setting/v1/work/calendar_year/:id
 */
export const WorkCalendarApi_getWorkCalendarByYear = async (
  id: string | number,
  params: WorkCalendarApi_GetWorkCalendarByYearRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_GetWorkCalendarByYearResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.GetWorkCalendarByYear@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_GetWorkCalendarByYearResponseBody>
    >(
      `api/gateway/sys_setting.work_calendar.GetWorkCalendarByYear/api/sys_setting/v1/work/calendar_year/${id}`,
      { ...options, params }
    )
  ).data;

export interface WorkCalendarApi_GetWorkCalendarByYearResponseBody_statistic_item {
  /** 月份 */
  month?: number;

  /** 工作日天数 */
  workDayCount?: number;

  /** 假期天数 */
  holidayCount?: number;
}
