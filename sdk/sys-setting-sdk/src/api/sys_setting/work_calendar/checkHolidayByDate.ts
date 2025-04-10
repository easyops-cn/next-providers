import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_CheckHolidayByDateRequestBody {
  /** 年月日，如 2023-01-01 */
  date: string;

  /** 日历id,为空则默认取国家法定节假日日历 */
  calendarId?: string;
}

export interface WorkCalendarApi_CheckHolidayByDateResponseBody {
  /** 是否是节假日 */
  isHoliday?: boolean;
}

/**
 * @description 验证日期是否是节假日
 * @endpoint POST /api/sys_setting/v1/work/calendar/holiday
 */
export const WorkCalendarApi_checkHolidayByDate = async (
  data: WorkCalendarApi_CheckHolidayByDateRequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_CheckHolidayByDateResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.CheckHolidayByDate@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkCalendarApi_CheckHolidayByDateResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/work/calendar/holiday",
      data,
      options
    )
  ).data;
