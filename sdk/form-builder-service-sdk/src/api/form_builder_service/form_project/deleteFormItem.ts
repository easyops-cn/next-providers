import { http, HttpOptions } from "@next-core/brick-http";
import { ModelDraftTemplateInfo } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_DeleteFormItemRequestParams {
  /** 表单实例id */
  formTemplateId?: string;

  /** 是否为草稿状态 */
  isDraft: boolean;
}

export type FormProjectApi_DeleteFormItemResponseBody =
  Partial<ModelDraftTemplateInfo>;

/**
 * @description 删除表单项
 * @endpoint DELETE /api/form_builder_service/v1/form_project/form_item/delete/:instanceId
 */
export const FormProjectApi_deleteFormItem = async (
  instanceId: string | number,
  params: FormProjectApi_DeleteFormItemRequestParams,
  options?: HttpOptions
): Promise<FormProjectApi_DeleteFormItemResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.DeleteFormItem@1.0.0 */ (
    await http.delete<
      ResponseBodyWrapper<FormProjectApi_DeleteFormItemResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.DeleteFormItem/api/form_builder_service/v1/form_project/form_item/delete/${instanceId}`,
      { ...options, params }
    )
  ).data;
