import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CopyFormProjectRequestBody {
  /** 实例id */
  instanceId?: string;
}

export interface FormProjectApi_CopyFormProjectResponseBody {
  /** 实例id */
  instanceId?: string;
}

/**
 * @description copy表单项目
 * @endpoint POST /api/form_builder_service/v1/form_project/form_project/copy
 */
export const FormProjectApi_copyFormProject = async (
  data: FormProjectApi_CopyFormProjectRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CopyFormProjectResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CopyFormProject@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CopyFormProjectResponseBody>
    >(
      "api/gateway/form_builder_service.form_project.CopyFormProject/api/form_builder_service/v1/form_project/form_project/copy",
      data,
      options
    )
  ).data;
