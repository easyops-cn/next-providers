import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkCalendar } from "../../../model/sys_setting";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_QueryWorkCalendarRequestParams {
  /** 页码 */
  page?: number;

  /** 页面大小 */
  pageSize?: number;

  /** 模糊搜索关键词，适用于创建人及日历名 */
  Q?: string;

  /** 年份 */
  year?: string;

  /** 状态 */
  status?: string;
}

export interface WorkCalendarApi_QueryWorkCalendarResponseItem {
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

  /** 状态 */
  status?: boolean;

  /** 年份 */
  year?: string;

  /** 修改人 */
  modifier?: string;

  /** 修改时间 */
  mtime?: string;

  /** 已经新建的年份 */
  dataYears?: string[];
}

export type WorkCalendarApi_QueryWorkCalendarResponseBody =
  ResponseListWrapper<WorkCalendarApi_QueryWorkCalendarResponseItem>;

/**
 * @description 模糊搜索工作日历
 * @endpoint LIST /api/sys_setting/v1/query/work/calendar
 */
export const WorkCalendarApi_queryWorkCalendar = async (
  params: WorkCalendarApi_QueryWorkCalendarRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_QueryWorkCalendarResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.QueryWorkCalendar@1.2.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_QueryWorkCalendarResponseBody>
    >("api/gateway/logic.sys_setting/api/sys_setting/v1/query/work/calendar", {
      ...options,
      params,
    })
  ).data;
