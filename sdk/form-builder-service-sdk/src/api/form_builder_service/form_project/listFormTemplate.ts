import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormTpl } from "../../../model/form_builder_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_ListFormTemplateRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数据量 */
  pageSize?: number;

  /** 项目Id */
  projectId?: string;

  /** formId过滤，多个用,分隔 */
  id__in?: string;

  /** formId过滤, 填写关键字 */
  id__like?: string;

  /** 名字 */
  formName?: string;
}

export type FormProjectApi_ListFormTemplateResponseItem = Partial<ModelFormTpl>;

export type FormProjectApi_ListFormTemplateResponseBody =
  ResponseListWrapper<FormProjectApi_ListFormTemplateResponseItem>;

/**
 * @description 获取表单列表
 * @endpoint LIST /api/form_builder_service/v1/form_project/form_template/retrieve
 */
export const FormProjectApi_listFormTemplate = async (
  params: FormProjectApi_ListFormTemplateRequestParams,
  options?: HttpOptions
): Promise<FormProjectApi_ListFormTemplateResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.ListFormTemplate@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_ListFormTemplateResponseBody>
    >(
      "api/gateway/form_builder_service.form_project.ListFormTemplate/api/form_builder_service/v1/form_project/form_template/retrieve",
      { ...options, params }
    )
  ).data;
