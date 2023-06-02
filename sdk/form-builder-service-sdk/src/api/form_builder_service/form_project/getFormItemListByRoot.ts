import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export type FormProjectApi_GetFormItemListByRootResponseBody = Record<
  string,
  any
>;

/**
 * @description 根据根节点获取表单项(未实现)
 * @endpoint GET /api/form_builder_service/v1/form_project/form_item/retrieve/:instanceId
 */
export const FormProjectApi_getFormItemListByRoot = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<FormProjectApi_GetFormItemListByRootResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetFormItemListByRoot@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetFormItemListByRootResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.GetFormItemListByRoot/api/form_builder_service/v1/form_project/form_item/retrieve/${instanceId}`,
      options
    )
  ).data;
