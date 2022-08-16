import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除表单模型字段
 * @endpoint DELETE /api/form_builder_service/v1/form_project/form_model_field/delete/:instanceId
 */
export const FormProjectApi_deleteFormModelField = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.DeleteFormModelField@1.0.0 */ http.delete<void>(
    `api/gateway/form_builder_service.form_project.DeleteFormModelField/api/form_builder_service/v1/form_project/form_model_field/delete/${instanceId}`,
    options
  );
