import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormItemWithoutFieldRequestBody {
  /** 表单实例id */
  parentItemId?: string;

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

export interface FormProjectApi_CreateFormItemWithoutFieldResponseBody {
  /** 表单项实例Id */
  instanceId?: string;
}

/**
 * @description 创建无关联模型字段的表单项
 * @endpoint POST /api/form_builder_service/v1/form_project/form_item/form_tepmlate/create/:formTemplateId
 */
export const FormProjectApi_createFormItemWithoutField = async (
  formTemplateId: string | number,
  data: FormProjectApi_CreateFormItemWithoutFieldRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormItemWithoutFieldResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormItemWithoutField@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormItemWithoutFieldResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormItemWithoutField/api/form_builder_service/v1/form_project/form_item/form_tepmlate/create/${formTemplateId}`,
      data,
      options
    )
  ).data;
