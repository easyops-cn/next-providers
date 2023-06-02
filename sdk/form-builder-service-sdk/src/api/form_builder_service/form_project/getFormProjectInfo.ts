import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormProjectInfo } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type FormProjectApi_GetFormProjectInfoResponseBody =
  Partial<ModelFormProjectInfo>;

/**
 * @description 获取项目详情
 * @endpoint GET /api/form_builder_service/v1/form_project/form_project/retrieve/:instanceId
 */
export const FormProjectApi_getFormProjectInfo = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<FormProjectApi_GetFormProjectInfoResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetFormProjectInfo@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetFormProjectInfoResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.GetFormProjectInfo/api/form_builder_service/v1/form_project/form_project/retrieve/${instanceId}`,
      options
    )
  ).data;
