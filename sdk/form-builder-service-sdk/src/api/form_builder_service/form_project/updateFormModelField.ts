import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormModelField } from "../../../model/form_builder_service";

export type FormProjectApi_UpdateFormModelFieldRequestBody =
  Partial<ModelFormModelField> & ModelFormModelField_partial;

/**
 * @description 更新表单模型字段
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_model_field/update/:instanceId
 */
export const FormProjectApi_updateFormModelField = (
  instanceId: string | number,
  data: FormProjectApi_UpdateFormModelFieldRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.UpdateFormModelField@1.0.0 */ http.put<void>(
    `api/gateway/form_builder_service.form_project.UpdateFormModelField/api/form_builder_service/v1/form_project/form_model_field/update/${instanceId}`,
    data,
    options
  );

export interface ModelFormModelField_partial {
  /** 实例id */
  instanceId: string;
}
