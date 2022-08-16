import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormTemplateAndModelRequestBody {
  /** 模型名 */
  modelName: string;

  /** 类型 */
  modelType?: string;

  /** 描述 */
  modelDescription?: string;

  /** 状态 */
  status?: string;

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

export interface FormProjectApi_CreateFormTemplateAndModelResponseBody {
  /** 表单实例Id */
  tplInstanceId?: string;

  /** 模型实例Id */
  modelInstanceId?: string;
}

/**
 * @description 创建表单与模型
 * @endpoint POST /api/form_builder_service/v1/form_project/form_template/create/form_project/:projectId
 */
export const FormProjectApi_createFormTemplateAndModel = async (
  projectId: string | number,
  data: FormProjectApi_CreateFormTemplateAndModelRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormTemplateAndModelResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormTemplateAndModel@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormTemplateAndModelResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormTemplateAndModel/api/form_builder_service/v1/form_project/form_template/create/form_project/${projectId}`,
      data,
      options
    )
  ).data;
