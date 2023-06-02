import { http, HttpOptions } from "@next-core/brick-http";
import { ModelIcon } from "../../../model/common";

export interface FormProjectApi_UpdateFormProjectRequestBody {
  /** 名字 */
  name?: string;

  /** 项目描述 */
  description?: string;

  /** 包含的模型 */
  modelIdList?: string[];

  /** 图标 */
  icon?: Partial<ModelIcon>;
}

/**
 * @description 更新表单项目
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_project/update/:instanceId
 */
export const FormProjectApi_updateFormProject = (
  instanceId: string | number,
  data: FormProjectApi_UpdateFormProjectRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.UpdateFormProject@1.0.0 */ http.put<void>(
    `api/gateway/form_builder_service.form_project.UpdateFormProject/api/form_builder_service/v1/form_project/form_project/update/${instanceId}`,
    data,
    options
  );
