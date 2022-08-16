import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormTemplateByModelRequestBody {
  /** 名字 */
  formName: string;

  /** 描述 */
  formDescription?: string;

  /** 是否为主版本 */
  isMain?: boolean;

  /** 表单定义 */
  formSchema?: string;

  /** context (动态请求) */
  context?: string;

  /** 表单id */
  id?: string;
}

export interface FormProjectApi_CreateFormTemplateByModelResponseBody {
  /** 实例Id */
  instanceId?: string;
}

/**
 * @description 通过模型创建表单
 * @endpoint POST /api/form_builder_service/v1/form_project/form_template/create/form_model/:modelId
 */
export const FormProjectApi_createFormTemplateByModel = async (
  modelId: string | number,
  data: FormProjectApi_CreateFormTemplateByModelRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormTemplateByModelResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormTemplateByModel@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormTemplateByModelResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormTemplateByModel/api/form_builder_service/v1/form_project/form_template/create/form_model/${modelId}`,
      data,
      options
    )
  ).data;
