import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormModelRequestBody {
  /** 模型名 */
  modelName: string;

  /** 类型 */
  modelType?: string;

  /** 描述 */
  modelDescription?: string;

  /** 状态 */
  status?: string;
}

export interface FormProjectApi_CreateFormModelResponseBody {
  /** 实例id */
  instanceId?: string;
}

/**
 * @description 创建表单模型
 * @endpoint POST /api/form_builder_service/v1/form_project/form_model/create/form_project/:projectId
 */
export const FormProjectApi_createFormModel = async (
  projectId: string | number,
  data: FormProjectApi_CreateFormModelRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormModelResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormModel@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormModelResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormModel/api/form_builder_service/v1/form_project/form_model/create/form_project/${projectId}`,
      data,
      options
    )
  ).data;
