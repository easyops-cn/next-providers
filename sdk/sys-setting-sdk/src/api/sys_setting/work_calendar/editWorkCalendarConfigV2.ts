import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkCalendar } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_EditWorkCalendarConfigV2RequestBody {
  /** 名称 */
  name: string;

  /** 备注 */
  memo?: string;

  /** 日历配置 */
  config: ModelWorkCalendar["config"];

  /** 状态 */
  status?: boolean;

  /** 年份 */
  year?: string;
}

export interface WorkCalendarApi_EditWorkCalendarConfigV2ResponseBody {
  /** ID(objectId类型) */
  id?: string;
}

/**
 * @description 增量修改日历配置,重新生成日历
 * @endpoint POST /api/sys_setting/v2/work/calendar/:id
 */
export const WorkCalendarApi_editWorkCalendarConfigV2 = async (
  id: string | number,
  data: WorkCalendarApi_EditWorkCalendarConfigV2RequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_EditWorkCalendarConfigV2ResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.EditWorkCalendarConfigV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkCalendarApi_EditWorkCalendarConfigV2ResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v2/work/calendar/${id}`,
      data,
      options
    )
  ).data;
