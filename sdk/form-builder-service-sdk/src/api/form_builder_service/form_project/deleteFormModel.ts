import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除表单模型
 * @endpoint DELETE /api/form_builder_service/v1/form_project/form_model/delete/:instanceId
 */
export const FormProjectApi_deleteFormModel = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.DeleteFormModel@1.0.0 */ http.delete<void>(
    `api/gateway/form_builder_service.form_project.DeleteFormModel/api/form_builder_service/v1/form_project/form_model/delete/${instanceId}`,
    options
  );
