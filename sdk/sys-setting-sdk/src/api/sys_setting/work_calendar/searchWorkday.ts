import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkDay } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_SearchWorkdayRequestBody {
  /** 开始时间 */
  st?: string;

  /** 结束时间 */
  ed?: string;

  /** 日历ID */
  id?: string;

  /** 排序方式 */
  sort?: WorkCalendarApi_SearchWorkdayRequestBody_sort;
}

export interface WorkCalendarApi_SearchWorkdayResponseBody {
  /** 工作日列表 */
  result?: Partial<ModelWorkDay>[];
}

/**
 * @description 查找工作日列表
 * @endpoint POST /api/sys_setting/v1/work_day/calendar_id
 */
export const WorkCalendarApi_searchWorkday = async (
  data: WorkCalendarApi_SearchWorkdayRequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_SearchWorkdayResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.SearchWorkday@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkCalendarApi_SearchWorkdayResponseBody>
    >(
      "api/gateway/sys_setting.work_calendar.SearchWorkday/api/sys_setting/v1/work_day/calendar_id",
      data,
      options
    )
  ).data;

export interface WorkCalendarApi_SearchWorkdayRequestBody_sort {
  /** 属性id */
  key?: string;

  /** 1表示升序， -1表示降序 */
  order?: number;
}
