import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkDay } from "../../../model/sys_setting";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_GetWorkdayByMonthRequestParams {
  /** 日历名称,为空则默认取国家法定节假日日历 */
  calendarName?: string;

  /** 年月，如 2023-01 */
  month: string;

  /** 排序方式(1表示升序， -1表示降序) */
  sort?: 1 | -1;
}

export type WorkCalendarApi_GetWorkdayByMonthResponseItem =
  Partial<ModelWorkDay>;

export type WorkCalendarApi_GetWorkdayByMonthResponseBody =
  ResponseListWrapper<WorkCalendarApi_GetWorkdayByMonthResponseItem>;

/**
 * @description 根据年月获取工作日
 * @endpoint LIST /api/sys_setting/v1/work_calendar/work_day/year_month
 */
export const WorkCalendarApi_getWorkdayByMonth = async (
  params: WorkCalendarApi_GetWorkdayByMonthRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_GetWorkdayByMonthResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.GetWorkdayByMonth@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_GetWorkdayByMonthResponseBody>
    >(
      "api/gateway/sys_setting.work_calendar.GetWorkdayByMonth/api/sys_setting/v1/work_calendar/work_day/year_month",
      { ...options, params }
    )
  ).data;
