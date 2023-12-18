import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkCalendar } from "../../../model/sys_setting";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_ListWorkCalendarRequestParams {
  /** 页码 */
  page?: number;

  /** 页面大小 */
  pageSize?: number;
}

export interface WorkCalendarApi_ListWorkCalendarResponseItem {
  /** ID(objectId类型) */
  id?: string;

  /** 名称 */
  name?: string;

  /** 创建人 */
  creator?: string;

  /** 创建时间 */
  ctime?: number;

  /** 备注 */
  memo?: string;

  /** 日历配置 */
  config?: ModelWorkCalendar["config"];

  /** 日历标识（可为空，不可修改；一般用于初始化时导入使用） */
  key?: string;

  /** 是否内置 */
  builtin?: boolean;
}

export type WorkCalendarApi_ListWorkCalendarResponseBody =
  ResponseListWrapper<WorkCalendarApi_ListWorkCalendarResponseItem>;

/**
 * @description 获取营业时间日历列表
 * @endpoint LIST /api/sys_setting/v1/work/calendar
 */
export const WorkCalendarApi_listWorkCalendar = async (
  params: WorkCalendarApi_ListWorkCalendarRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_ListWorkCalendarResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.ListWorkCalendar@1.2.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_ListWorkCalendarResponseBody>
    >(
      "api/gateway/sys_setting.work_calendar.ListWorkCalendar/api/sys_setting/v1/work/calendar",
      { ...options, params }
    )
  ).data;
