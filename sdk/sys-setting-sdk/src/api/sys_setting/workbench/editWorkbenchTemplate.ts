import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWorkbenchHubTemplate } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WorkbenchApi_EditWorkbenchTemplateRequestBody {
  /** 要更新的工作台模板数据 */
  templateData?: Record<string, any>;
}

export type WorkbenchApi_EditWorkbenchTemplateResponseBody =
  Partial<ModelWorkbenchHubTemplate>;

/**
 * @description 编辑工作台模板
 * @endpoint PUT /api/sys_setting/v1/workbench/template/:instanceId
 */
export const WorkbenchApi_editWorkbenchTemplate = async (
  instanceId: string | number,
  data: WorkbenchApi_EditWorkbenchTemplateRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_EditWorkbenchTemplateResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.EditWorkbenchTemplate@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<WorkbenchApi_EditWorkbenchTemplateResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/workbench/template/${instanceId}`,
      data,
      options
    )
  ).data;
