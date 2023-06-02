import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormTpl } from "../../../model/form_builder_service";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_GetTplDraftByNameRequestParams {
  /** 所属项目实例Id */
  projectInstanceId: string;
}

export type FormProjectApi_GetTplDraftByNameResponseItem =
  Partial<ModelFormTpl>;

export type FormProjectApi_GetTplDraftByNameResponseBody =
  ResponseListWrapper<FormProjectApi_GetTplDraftByNameResponseItem>;

/**
 * @description 获取表单草稿
 * @endpoint LIST /api/form_builder_service/v1/form_project/form_draft/retrieve/form_name/:name
 */
export const FormProjectApi_getTplDraftByName = async (
  name: string | number,
  params: FormProjectApi_GetTplDraftByNameRequestParams,
  options?: HttpOptions
): Promise<FormProjectApi_GetTplDraftByNameResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetTplDraftByName@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetTplDraftByNameResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.GetTplDraftByName/api/form_builder_service/v1/form_project/form_draft/retrieve/form_name/${name}`,
      { ...options, params }
    )
  ).data;
