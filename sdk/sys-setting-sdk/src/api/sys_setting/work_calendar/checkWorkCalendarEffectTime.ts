import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEffectiveTime } from "../../../model/alert_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkCalendarApi_CheckWorkCalendarEffectTimeRequestBody {
  /** 时间戳 */
  timestamp: number;

  /** 时间配置 */
  effectiveTime: Partial<ModelEffectiveTime>;
}

export interface WorkCalendarApi_CheckWorkCalendarEffectTimeResponseBody {
  /** 是否有效 */
  effect?: boolean;
}

/**
 * @description 校验日历生效时间
 * @endpoint POST /api/sys_setting/v1/work/calendar/:id/check_effect_time
 */
export const WorkCalendarApi_checkWorkCalendarEffectTime = async (
  id: string | number,
  data: WorkCalendarApi_CheckWorkCalendarEffectTimeRequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_CheckWorkCalendarEffectTimeResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.CheckWorkCalendarEffectTime@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkCalendarApi_CheckWorkCalendarEffectTimeResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/work/calendar/${id}/check_effect_time`,
      data,
      options
    )
  ).data;
