import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkDay } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_GetWorkdayByKeyRequestParams {
  /** 开始时间 */
  st?: string;

  /** 结束时间 */
  ed?: string;

  /** 节假日的key(区分不同的工作日历,为空使用默认的工作日历) */
  key?: string;
}

export interface WorkCalendarApi_GetWorkdayByKeyResponseBody {
  /** 工作日列表 */
  result?: Partial<ModelWorkDay>[];
}

/**
 * @description 获取key获取工作日列表
 * @endpoint GET /api/sys_setting/v1/work_day/calendar_key
 */
export const WorkCalendarApi_getWorkdayByKey = async (
  params: WorkCalendarApi_GetWorkdayByKeyRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_GetWorkdayByKeyResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.GetWorkdayByKey@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_GetWorkdayByKeyResponseBody>
    >(
      "api/gateway/sys_setting.work_calendar.GetWorkdayByKey/api/sys_setting/v1/work_day/calendar_key",
      { ...options, params }
    )
  ).data;
