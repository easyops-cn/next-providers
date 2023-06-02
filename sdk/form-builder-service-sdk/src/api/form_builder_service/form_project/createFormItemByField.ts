import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormItemByFieldRequestBody {
  /** 表单实例id */
  formTemplateId: string;

  /** 表单实例id */
  parentItemId?: string;

  /** 是否为草稿状态 */
  isDraft: boolean;

  /** 序号 */
  id: string;

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
}

export interface FormProjectApi_CreateFormItemByFieldResponseBody {
  /** 实例Id */
  instanceId?: string;
}

/**
 * @description 通过模型字段创建表单项
 * @endpoint POST /api/form_builder_service/v1/form_project/form_item/form_model_field/create/:fieldId
 */
export const FormProjectApi_createFormItemByField = async (
  fieldId: string | number,
  data: FormProjectApi_CreateFormItemByFieldRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormItemByFieldResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormItemByField@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormItemByFieldResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormItemByField/api/form_builder_service/v1/form_project/form_item/form_model_field/create/${fieldId}`,
      data,
      options
    )
  ).data;
