import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkbenchHubTemplate } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export type WorkbenchApi_CreateWorkbenchTemplateRequestBody =
  Partial<ModelWorkbenchHubTemplate>;

export type WorkbenchApi_CreateWorkbenchTemplateResponseBody =
  Partial<ModelWorkbenchHubTemplate>;

/**
 * @description 新增工作台模板
 * @endpoint POST /api/sys_setting/v1/workbench/template
 */
export const WorkbenchApi_createWorkbenchTemplate = async (
  data: WorkbenchApi_CreateWorkbenchTemplateRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_CreateWorkbenchTemplateResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.CreateWorkbenchTemplate@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkbenchApi_CreateWorkbenchTemplateResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/workbench/template",
      data,
      options
    )
  ).data;
