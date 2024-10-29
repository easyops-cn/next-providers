import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormTpl } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_SearchFormTemplateRequestBody {
  /** 页码 */
  page?: number;

  /** 每页数据量 */
  pageSize?: number;

  /** 项目Id */
  projectId?: string;

  /** formId过滤 */
  ids?: string[];

  /** formVersionId过滤 */
  versionIds?: string[];

  /** 模糊查询 (支持名称,id,版本号模糊查询) */
  q?: string;
}

export interface FormProjectApi_SearchFormTemplateResponseBody {
  /** total */
  total?: number;

  /** page */
  page?: number;

  /** page_size */
  page_size?: number;

  /** 表单模板列表 */
  list?: Partial<ModelFormTpl>[];
}

/**
 * @description 表单模板查询
 * @endpoint POST /api/form_builder_service/v1/form_project/form_template/_search
 */
export const FormProjectApi_searchFormTemplate = async (
  data: FormProjectApi_SearchFormTemplateRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_SearchFormTemplateResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.SearchFormTemplate@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_SearchFormTemplateResponseBody>
    >(
      "api/gateway/form_builder_service.form_project.SearchFormTemplate/api/form_builder_service/v1/form_project/form_template/_search",
      data,
      options
    )
  ).data;
