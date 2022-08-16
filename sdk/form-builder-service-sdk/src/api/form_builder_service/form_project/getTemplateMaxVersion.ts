import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_GetTemplateMaxVersionRequestParams {
  /** 名字 */
  name: string;

  /** 所属项目实例Id */
  projectInstanceId: string;
}

export interface FormProjectApi_GetTemplateMaxVersionResponseBody {
  /** 版本号 */
  version?: string;
}

/**
 * @description 获取模版最大版本
 * @endpoint GET /api/form_builder_service/v1/form_project/form_tamplate/retrieve/max_version
 */
export const FormProjectApi_getTemplateMaxVersion = async (
  params: FormProjectApi_GetTemplateMaxVersionRequestParams,
  options?: HttpOptions
): Promise<FormProjectApi_GetTemplateMaxVersionResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetTemplateMaxVersion@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetTemplateMaxVersionResponseBody>
    >(
      "api/gateway/form_builder_service.form_project.GetTemplateMaxVersion/api/form_builder_service/v1/form_project/form_tamplate/retrieve/max_version",
      { ...options, params }
    )
  ).data;
