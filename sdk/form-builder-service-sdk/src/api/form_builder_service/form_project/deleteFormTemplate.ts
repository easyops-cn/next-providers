import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除表单模版
 * @endpoint DELETE /api/form_builder_service/v1/form_project/form_template/delete/:instanceId
 */
export const FormProjectApi_deleteFormTemplate = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.DeleteFormTemplate@1.0.0 */ http.delete<void>(
    `api/gateway/form_builder_service.form_project.DeleteFormTemplate/api/form_builder_service/v1/form_project/form_template/delete/${instanceId}`,
    options
  );
