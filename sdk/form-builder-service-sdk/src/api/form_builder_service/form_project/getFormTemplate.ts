import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormTpl } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_GetFormTemplateRequestParams {
  /** 项目Id */
  projectId: string;

  /** 主版本(false时返回最新发行版本) */
  isMain?: boolean;
}

export type FormProjectApi_GetFormTemplateResponseBody = Partial<ModelFormTpl>;

/**
 * @description 获取表单详情
 * @endpoint GET /api/form_builder_service/v1/form_project/form_template/retrieve/:id
 */
export const FormProjectApi_getFormTemplate = async (
  id: string | number,
  params: FormProjectApi_GetFormTemplateRequestParams,
  options?: HttpOptions
): Promise<FormProjectApi_GetFormTemplateResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetFormTemplate@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetFormTemplateResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.GetFormTemplate/api/form_builder_service/v1/form_project/form_template/retrieve/${id}`,
      { ...options, params }
    )
  ).data;
