import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkCalendar } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_GetWorkCalendarByMonthRequestParams {
  /** 年份(默认为当前年份) */
  year?: number;

  /** 月份 */
  month: number;
}

export interface WorkCalendarApi_GetWorkCalendarByMonthResponseBody {
  /** ID(objectId类型) */
  id?: string;

  /** 名称 */
  name?: string;

  /** 工作日详情 */
  days?: ModelWorkCalendar["days"];

  /** 创建人 */
  creator?: string;

  /** 创建时间 */
  ctime?: number;

  /** 备注 */
  memo?: string;

  /** 状态 */
  status?: boolean;

  /** 年份 */
  year?: string;

  /** 修改人 */
  modifier?: string;

  /** 修改时间 */
  mtime?: string;
}

/**
 * @description 获取日历的按月详情
 * @endpoint GET /api/sys_setting/v1/work/calendar_month/:id
 */
export const WorkCalendarApi_getWorkCalendarByMonth = async (
  id: string | number,
  params: WorkCalendarApi_GetWorkCalendarByMonthRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_GetWorkCalendarByMonthResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.GetWorkCalendarByMonth@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_GetWorkCalendarByMonthResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/work/calendar_month/${id}`,
      { ...options, params }
    )
  ).data;
