import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormModelWithTpl } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type FormProjectApi_GetModelWithTemplatesResponseBody =
  Partial<ModelFormModelWithTpl>;

/**
 * @description 获取模型及其衍生模版(未实现)
 * @endpoint GET /api/form_builder_service/v1/form_project/form_model/form_template/retrieve/:instanceId
 */
export const FormProjectApi_getModelWithTemplates = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<FormProjectApi_GetModelWithTemplatesResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetModelWithTemplates@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetModelWithTemplatesResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.GetModelWithTemplates/api/form_builder_service/v1/form_project/form_model/form_template/retrieve/${instanceId}`,
      options
    )
  ).data;
