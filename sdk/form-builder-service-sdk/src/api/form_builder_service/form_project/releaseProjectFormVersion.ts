import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_ReleaseProjectFormVersionRequestBody {
  /** 草稿名 */
  formName: string;

  /** 表单版本 */
  version: string;
}

/**
 * @description 发布表单版本
 * @endpoint POST /api/form_builder_service/v1/form_project/form_template/update_form_version/:instanceId
 */
export const FormProjectApi_releaseProjectFormVersion = (
  instanceId: string | number,
  data: FormProjectApi_ReleaseProjectFormVersionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.ReleaseProjectFormVersion@1.0.0 */ http.post<void>(
    `api/gateway/form_builder_service.form_project.ReleaseProjectFormVersion/api/form_builder_service/v1/form_project/form_template/update_form_version/${instanceId}`,
    data,
    options
  );
