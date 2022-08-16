import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_SetMainVersionFormTemplateRequestBody {
  /** 名字（分组凭据） */
  name?: string;
}

/**
 * @description 设置主版本模版
 * @endpoint POST /api/form_builder_service/v1/form_project/form_template/update/main_version/:instanceId
 */
export const FormProjectApi_setMainVersionFormTemplate = (
  instanceId: string | number,
  data: FormProjectApi_SetMainVersionFormTemplateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.SetMainVersionFormTemplate@1.0.0 */ http.post<void>(
    `api/gateway/form_builder_service.form_project.SetMainVersionFormTemplate/api/form_builder_service/v1/form_project/form_template/update/main_version/${instanceId}`,
    data,
    options
  );
