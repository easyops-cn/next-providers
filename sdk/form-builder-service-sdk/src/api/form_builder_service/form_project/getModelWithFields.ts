import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormModelWithField } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type FormProjectApi_GetModelWithFieldsResponseBody =
  Partial<ModelFormModelWithField>;

/**
 * @description 获取模型及其字段
 * @endpoint GET /api/form_builder_service/v1/form_project/form_model/form_model_field/retrieve/:instanceId
 */
export const FormProjectApi_getModelWithFields = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<FormProjectApi_GetModelWithFieldsResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetModelWithFields@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetModelWithFieldsResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.GetModelWithFields/api/form_builder_service/v1/form_project/form_model/form_model_field/retrieve/${instanceId}`,
      options
    )
  ).data;
