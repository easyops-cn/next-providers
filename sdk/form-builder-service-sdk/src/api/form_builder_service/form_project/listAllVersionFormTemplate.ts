import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormTpl } from "../../../model/form_builder_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export type FormProjectApi_ListAllVersionFormTemplateResponseItem =
  Partial<ModelFormTpl>;

export type FormProjectApi_ListAllVersionFormTemplateResponseBody =
  ResponseListWrapper<FormProjectApi_ListAllVersionFormTemplateResponseItem>;

/**
 * @description 获取表单全部版本
 * @endpoint LIST /api/form_builder_service/v1/form_project/form_tamplate/retrieve/form_name/:name
 */
export const FormProjectApi_listAllVersionFormTemplate = async (
  name: string | number,
  options?: HttpOptions
): Promise<FormProjectApi_ListAllVersionFormTemplateResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.ListAllVersionFormTemplate@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_ListAllVersionFormTemplateResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.ListAllVersionFormTemplate/api/form_builder_service/v1/form_project/form_tamplate/retrieve/form_name/${name}`,
      options
    )
  ).data;
