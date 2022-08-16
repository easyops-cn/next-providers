import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_SetFormSchemaRequestBody {
  /** 表单定义 */
  formSchema?: string;
}

/**
 * @description 设置表单定义
 * @endpoint POST /api/form_builder_service/v1/form_project/form_template/update_form_schema/:instanceId
 */
export const FormProjectApi_setFormSchema = (
  instanceId: string | number,
  data: FormProjectApi_SetFormSchemaRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.SetFormSchema@1.0.0 */ http.post<void>(
    `api/gateway/form_builder_service.form_project.SetFormSchema/api/form_builder_service/v1/form_project/form_template/update_form_schema/${instanceId}`,
    data,
    options
  );
