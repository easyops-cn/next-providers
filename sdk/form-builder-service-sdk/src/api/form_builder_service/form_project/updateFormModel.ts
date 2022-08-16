import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_UpdateFormModelRequestBody {
  /** 模型名 */
  modelName?: string;

  /** 类型 */
  modelType?: string;

  /** 描述 */
  modelDescription?: string;

  /** 状态 */
  status?: string;
}

/**
 * @description 更新表单模型
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_model/update/:instanceId
 */
export const FormProjectApi_updateFormModel = (
  instanceId: string | number,
  data: FormProjectApi_UpdateFormModelRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.UpdateFormModel@1.0.0 */ http.put<void>(
    `api/gateway/form_builder_service.form_project.UpdateFormModel/api/form_builder_service/v1/form_project/form_model/update/${instanceId}`,
    data,
    options
  );
