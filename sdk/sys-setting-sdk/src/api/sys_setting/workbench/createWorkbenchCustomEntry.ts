import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkbenchCustomEntry } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkbenchApi_CreateWorkbenchCustomEntryRequestBody {
  /** 标题 */
  title?: string;

  /** 类型: example: normal/small/iframe */
  type?: string;

  /** 卡片内容 */
  list?: Record<string, any>[];

  /** 告警时间范围，from 可以是 now-1d，now-7d 这些格式化字符串，也可以是时间戳类型的值 */
  timeRange?: ModelWorkbenchCustomEntry["timeRange"];
}

export type WorkbenchApi_CreateWorkbenchCustomEntryResponseBody =
  Partial<ModelWorkbenchCustomEntry>;

/**
 * @description 创建工作台自定义入口
 * @endpoint POST /api/sys_setting/v1/workbench_custom_entry
 */
export const WorkbenchApi_createWorkbenchCustomEntry = async (
  data: WorkbenchApi_CreateWorkbenchCustomEntryRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_CreateWorkbenchCustomEntryResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.CreateWorkbenchCustomEntry@1.0.1 */ (
    await http.post<
      ResponseBodyWrapper<WorkbenchApi_CreateWorkbenchCustomEntryResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/workbench_custom_entry",
      data,
      options
    )
  ).data;
