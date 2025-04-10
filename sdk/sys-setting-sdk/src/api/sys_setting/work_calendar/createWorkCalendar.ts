import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkCalendar } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_CreateWorkCalendarRequestBody {
  /** 名称 */
  name: string;

  /** 日历配置 */
  config: ModelWorkCalendar["config"];

  /** 备注 */
  memo?: string;

  /** 日历标识（可为空，不可修改；一般用于初始化时导入使用） */
  key?: string;

  /** 是否内置 */
  builtin?: boolean;

  /** 状态 */
  status?: boolean;

  /** 年份 */
  year?: string;
}

export interface WorkCalendarApi_CreateWorkCalendarResponseBody {
  /** ID(objectId类型) */
  id?: string;
}

/**
 * @description 通过配置创建工作日历
 * @endpoint POST /api/sys_setting/v1/work/calendar
 */
export const WorkCalendarApi_createWorkCalendar = async (
  data: WorkCalendarApi_CreateWorkCalendarRequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_CreateWorkCalendarResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.CreateWorkCalendar@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkCalendarApi_CreateWorkCalendarResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/work/calendar",
      data,
      options
    )
  ).data;
