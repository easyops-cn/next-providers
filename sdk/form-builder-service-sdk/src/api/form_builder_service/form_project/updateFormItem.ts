import { http, HttpOptions } from "@next-core/brick-http";
import { ModelDraftTemplateInfo } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_UpdateFormItemRequestBody {
  /** 表单实例id */
  formTemplateId: string;

  /** 序号 */
  id?: string;

  /** 块 */
  brick?: string;

  /** 属性 */
  properties?: string;

  /** 挂载点 */
  mountPoint?: string;

  /** 事件列表 */
  events?: string[];

  /** 排序 */
  sort?: number;

  /** 是否展示 */
  if?: boolean;

  /** 是否为草稿状态 */
  isDraft: boolean;
}

export type FormProjectApi_UpdateFormItemResponseBody =
  Partial<ModelDraftTemplateInfo>;

/**
 * @description 更新表单项
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_item/update/:instanceId
 */
export const FormProjectApi_updateFormItem = async (
  instanceId: string | number,
  data: FormProjectApi_UpdateFormItemRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_UpdateFormItemResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.UpdateFormItem@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<FormProjectApi_UpdateFormItemResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.UpdateFormItem/api/form_builder_service/v1/form_project/form_item/update/${instanceId}`,
      data,
      options
    )
  ).data;
