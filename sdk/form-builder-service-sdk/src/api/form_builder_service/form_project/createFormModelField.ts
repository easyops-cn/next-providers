import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormModelFieldRequestBody {
  /** id */
  fieldId: string;

  /** 字段名 */
  name: string;

  /** 类型 */
  fieldType: string;

  /** 描述 */
  description?: string;

  /** 限制 */
  limit?: string[];

  /** 默认值 */
  defaultValue?: string;
}

export interface FormProjectApi_CreateFormModelFieldResponseBody {
  /** 实例id */
  instanceId?: string;
}

/**
 * @description 创建表单模型字段
 * @endpoint POST /api/form_builder_service/v1/form_project/form_model_field/create/form_model/:modelId
 */
export const FormProjectApi_createFormModelField = async (
  modelId: string | number,
  data: FormProjectApi_CreateFormModelFieldRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormModelFieldResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormModelField@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormModelFieldResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormModelField/api/form_builder_service/v1/form_project/form_model_field/create/form_model/${modelId}`,
      data,
      options
    )
  ).data;
