import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除表单项目
 * @endpoint DELETE /api/form_builder_service/v1/form_project/form_project/delete/:instanceId
 */
export const FormProjectApi_deleteFormProject = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.DeleteFormProject@1.0.0 */ http.delete<void>(
    `api/gateway/form_builder_service.form_project.DeleteFormProject/api/form_builder_service/v1/form_project/form_project/delete/${instanceId}`,
    options
  );
