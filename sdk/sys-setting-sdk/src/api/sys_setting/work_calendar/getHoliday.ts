import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkDay } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_GetHolidayRequestParams {
  /** 开始时间 */
  st?: string;

  /** 结束时间 */
  ed?: string;

  /** 节假日的key(区分不同的工作日历,为空使用默认的工作日历) */
  key?: string;
}

export interface WorkCalendarApi_GetHolidayResponseBody {
  /** 节假日列表 */
  result?: Partial<ModelWorkDay>[];
}

/**
 * @description 获取节假日列表
 * @endpoint GET /api/sys_setting/v1/holiday
 */
export const WorkCalendarApi_getHoliday = async (
  params: WorkCalendarApi_GetHolidayRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_GetHolidayResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.GetHoliday@1.0.0 */ (
    await http.get<ResponseBodyWrapper<WorkCalendarApi_GetHolidayResponseBody>>(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/holiday",
      { ...options, params }
    )
  ).data;
