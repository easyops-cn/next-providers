import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkDay } from "../../../model/sys_setting";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_ListWorkDayRequestParams {
  /** 开始时间 */
  startDate: string;

  /** 结束时间,为空则为当日 */
  endDate?: string;

  /** 日历名称,为空则默认取国家法定节假日日历 */
  calendarName?: string;

  /** 排序方式(1表示升序， -1表示降序) */
  sort?: 1 | -1;
}

export type WorkCalendarApi_ListWorkDayResponseItem = Partial<ModelWorkDay>;

export type WorkCalendarApi_ListWorkDayResponseBody =
  ResponseListWrapper<WorkCalendarApi_ListWorkDayResponseItem>;

/**
 * @description 查找工作日列表
 * @endpoint LIST /api/sys_setting/v1/work_calendar/work_day
 */
export const WorkCalendarApi_listWorkDay = async (
  params: WorkCalendarApi_ListWorkDayRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_ListWorkDayResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.ListWorkDay@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_ListWorkDayResponseBody>
    >(
      "api/gateway/sys_setting.work_calendar.ListWorkDay/api/sys_setting/v1/work_calendar/work_day",
      { ...options, params }
    )
  ).data;
