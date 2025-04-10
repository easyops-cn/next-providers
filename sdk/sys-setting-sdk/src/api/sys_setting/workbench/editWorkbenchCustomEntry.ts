import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkbenchCustomEntry } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkbenchApi_EditWorkbenchCustomEntryRequestBody {
  /** 标题 */
  title?: string;

  /** 类型: example: normal/small/iframe */
  type?: string;

  /** 卡片内容 */
  list?: Record<string, any>[];

  /** 告警时间范围，from 可以是 now-1d，now-7d 这些格式化字符串，也可以是时间戳类型的值 */
  timeRange?: ModelWorkbenchCustomEntry["timeRange"];
}

export type WorkbenchApi_EditWorkbenchCustomEntryResponseBody =
  Partial<ModelWorkbenchCustomEntry>;

/**
 * @description 编辑工作台自定义入口
 * @endpoint PUT /api/sys_setting/v1/workbench_custom_entry/:instanceId
 */
export const WorkbenchApi_editWorkbenchCustomEntry = async (
  instanceId: string | number,
  data: WorkbenchApi_EditWorkbenchCustomEntryRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_EditWorkbenchCustomEntryResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.EditWorkbenchCustomEntry@1.0.1 */ (
    await http.put<
      ResponseBodyWrapper<WorkbenchApi_EditWorkbenchCustomEntryResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/workbench_custom_entry/${instanceId}`,
      data,
      options
    )
  ).data;
