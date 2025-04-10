import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_CloneWorkCalendarRequestBody {
  /** ID(objectId类型) */
  id?: string;
}

export interface WorkCalendarApi_CloneWorkCalendarResponseBody {
  /** ID(objectId类型) */
  id?: string;
}

/**
 * @description 通过其他日历克隆工作日历
 * @endpoint POST /api/sys_setting/v1/work/calendar/clone
 */
export const WorkCalendarApi_cloneWorkCalendar = async (
  data: WorkCalendarApi_CloneWorkCalendarRequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_CloneWorkCalendarResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.CloneWorkCalendar@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkCalendarApi_CloneWorkCalendarResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/work/calendar/clone",
      data,
      options
    )
  ).data;
