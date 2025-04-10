import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkbenchHub } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkbenchApi_SetWorkbenchRequestBody = Partial<ModelWorkbenchHub>;

export type WorkbenchApi_SetWorkbenchResponseBody = Partial<ModelWorkbenchHub>;

/**
 * @description 设置工作台
 * @endpoint PUT /api/sys_setting/workbench/set
 */
export const WorkbenchApi_setWorkbench = async (
  data: WorkbenchApi_SetWorkbenchRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_SetWorkbenchResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.SetWorkbench@1.0.0 */ (
    await http.put<ResponseBodyWrapper<WorkbenchApi_SetWorkbenchResponseBody>>(
      "api/gateway/logic.sys_setting/api/sys_setting/workbench/set",
      data,
      options
    )
  ).data;
