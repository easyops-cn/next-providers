import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkCalendar } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_GetWorkCalendarDetailRequestParams {
  /** 年份 */
  year?: string;
}

export interface WorkCalendarApi_GetWorkCalendarDetailResponseBody {
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

  /** 有数据的年份 */
  dataYears?: string[];
}

/**
 * @description 获取日历的配置详情
 * @endpoint GET /api/sys_setting/v1/work/calendar/:id
 */
export const WorkCalendarApi_getWorkCalendarDetail = async (
  id: string | number,
  params: WorkCalendarApi_GetWorkCalendarDetailRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_GetWorkCalendarDetailResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.GetWorkCalendarDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_GetWorkCalendarDetailResponseBody>
    >(`api/gateway/logic.sys_setting/api/sys_setting/v1/work/calendar/${id}`, {
      ...options,
      params,
    })
  ).data;
