import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除项目内id相同的表单模版(删除表单及其所有版本)
 * @endpoint DELETE /api/form_builder_service/v1/form_template/delete/project_instanceId/:projectInstanceId/form_id/:id
 */
export const FormTemplateApi_deleteFormTemplateByFormId = (
  projectInstanceId: string | number,
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_template.DeleteFormTemplateByFormId@1.0.0 */ http.delete<void>(
    `api/gateway/form_builder_service.form_template.DeleteFormTemplateByFormId/api/form_builder_service/v1/form_template/delete/project_instanceId/${projectInstanceId}/form_id/${id}`,
    options
  );
