import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkbenchHub } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkbenchApi_GetWorkbenchResponseBody = Partial<ModelWorkbenchHub>;

/**
 * @description 获取工作台信息
 * @endpoint GET /api/sys_setting/v1/workbench
 */
export const WorkbenchApi_getWorkbench = async (
  options?: HttpOptions
): Promise<WorkbenchApi_GetWorkbenchResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.GetWorkbench@1.0.0 */ (
    await http.get<ResponseBodyWrapper<WorkbenchApi_GetWorkbenchResponseBody>>(
      "api/gateway/sys_setting.workbench.GetWorkbench/api/sys_setting/v1/workbench",
      options
    )
  ).data;
