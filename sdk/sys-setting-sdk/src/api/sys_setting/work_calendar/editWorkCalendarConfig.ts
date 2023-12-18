import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkCalendar } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_EditWorkCalendarConfigRequestBody {
  /** 名称 */
  name: string;

  /** 备注 */
  memo?: string;

  /** 日历配置 */
  config: ModelWorkCalendar["config"];
}

export interface WorkCalendarApi_EditWorkCalendarConfigResponseBody {
  /** ID(objectId类型) */
  id?: string;
}

/**
 * @description 修改日历配置,重新生成日历
 * @endpoint PUT /api/sys_setting/v1/work/calendar/:id
 */
export const WorkCalendarApi_editWorkCalendarConfig = async (
  id: string | number,
  data: WorkCalendarApi_EditWorkCalendarConfigRequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_EditWorkCalendarConfigResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.EditWorkCalendarConfig@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<WorkCalendarApi_EditWorkCalendarConfigResponseBody>
    >(
      `api/gateway/sys_setting.work_calendar.EditWorkCalendarConfig/api/sys_setting/v1/work/calendar/${id}`,
      data,
      options
    )
  ).data;
