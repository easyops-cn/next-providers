import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormItemAndFieldRequestBody {
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

  /** id */
  fieldId: string;

  /** 字段名 */
  name: string;

  /** 类型 */
  fieldType?: string;

  /** 限制 */
  limit?: string[];

  /** 描述 */
  description?: string;

  /** 默认值 */
  defaultValue?: string;
}

export interface FormProjectApi_CreateFormItemAndFieldResponseBody {
  /** 表单项实例Id */
  itemInstanceId?: string;

  /** 模型字段实例Id */
  fieldInstanceId?: string;
}

/**
 * @description 创建表单与模型
 * @endpoint POST /api/form_builder_service/v1/form_project/form_item/create/form_template/:templateId/form_model/:modelId
 */
export const FormProjectApi_createFormItemAndField = async (
  templateId: string | number,
  modelId: string | number,
  data: FormProjectApi_CreateFormItemAndFieldRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormItemAndFieldResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormItemAndField@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormItemAndFieldResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormItemAndField/api/form_builder_service/v1/form_project/form_item/create/form_template/${templateId}/form_model/${modelId}`,
      data,
      options
    )
  ).data;
