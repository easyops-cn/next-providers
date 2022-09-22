import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelDraftTemplateInfo,
  ModelFormModelField,
} from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormItemRequestBody {
  /** 表单实例id */
  formTemplateId: string;

  /** 表单实例id */
  parentItemId: string;

  /** 表单模型id */
  modelId?: string;

  /** 是否为草稿状态 */
  isDraft: boolean;

  /** 模型字段 */
  formModelField?: Partial<ModelFormModelField>;

  /** 表单项信息 */
  formItem?: FormProjectApi_CreateFormItemRequestBody_formItem;
}

export type FormProjectApi_CreateFormItemResponseBody =
  Partial<ModelDraftTemplateInfo>;

/**
 * @description 创建表单项业务聚合
 * @endpoint POST /api/form_builder_service/v1/form_project/create/form_item
 */
export const FormProjectApi_createFormItem = async (
  data: FormProjectApi_CreateFormItemRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormItemResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormItem@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormItemResponseBody>
    >(
      "api/gateway/form_builder_service.form_project.CreateFormItem/api/form_builder_service/v1/form_project/create/form_item",
      data,
      options
    )
  ).data;

export interface FormProjectApi_CreateFormItemRequestBody_formItem {
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
}
