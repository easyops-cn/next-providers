import { http, HttpOptions } from "@next-core/brick-http";
import { ModelIcon } from "../../../model/common";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormProjectRequestBody {
  /** 名字 */
  name: string;

  /** 项目描述 */
  description?: string;

  /** 图标 */
  icon?: Partial<ModelIcon>;
}

export interface FormProjectApi_CreateFormProjectResponseBody {
  /** 实例id */
  instanceId?: string;
}

/**
 * @description 创建表单项目
 * @endpoint POST /api/form_builder_service/v1/form_project/form_project/create
 */
export const FormProjectApi_createFormProject = async (
  data: FormProjectApi_CreateFormProjectRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormProjectResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormProject@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormProjectResponseBody>
    >(
      "api/gateway/form_builder_service.form_project.CreateFormProject/api/form_builder_service/v1/form_project/form_project/create",
      data,
      options
    )
  ).data;
