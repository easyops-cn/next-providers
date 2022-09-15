import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_DeleteFormItemRequestParams {
  /** 是否为草稿状态 */
  isDraft: boolean;
}

/**
 * @description 删除表单项
 * @endpoint DELETE /api/form_builder_service/v1/form_project/form_item/delete/:instanceId
 */
export const FormProjectApi_deleteFormItem = (
  instanceId: string | number,
  params: FormProjectApi_DeleteFormItemRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.DeleteFormItem@1.0.0 */ http.delete<void>(
    `api/gateway/form_builder_service.form_project.DeleteFormItem/api/form_builder_service/v1/form_project/form_item/delete/${instanceId}`,
    { ...options, params }
  );
