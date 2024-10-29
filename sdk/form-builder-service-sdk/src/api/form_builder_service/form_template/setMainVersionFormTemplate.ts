import { http, HttpOptions } from "@next-core/brick-http";

export interface FormTemplateApi_SetMainVersionFormTemplateRequestBody {
  /** formId（分组凭据） */
  id: string;
}

/**
 * @description 设置主版本模版
 * @endpoint POST /api/form_builder_service/v1/form_template/update/main_version/form_project/:projectId/form_template/:instanceId
 */
export const FormTemplateApi_setMainVersionFormTemplate = (
  projectId: string | number,
  instanceId: string | number,
  data: FormTemplateApi_SetMainVersionFormTemplateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_template.SetMainVersionFormTemplate@1.0.0 */ http.post<void>(
    `api/gateway/form_builder_service.form_template.SetMainVersionFormTemplate/api/form_builder_service/v1/form_template/update/main_version/form_project/${projectId}/form_template/${instanceId}`,
    data,
    options
  );
