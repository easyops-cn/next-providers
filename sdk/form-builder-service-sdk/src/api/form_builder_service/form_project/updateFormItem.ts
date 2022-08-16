import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_UpdateFormItemRequestBody {
  /** 关联的表单Id */
  formId: string;

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

/**
 * @description 更新表单项
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_item/update/:instanceId
 */
export const FormProjectApi_updateFormItem = (
  instanceId: string | number,
  data: FormProjectApi_UpdateFormItemRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.UpdateFormItem@1.0.0 */ http.put<void>(
    `api/gateway/form_builder_service.form_project.UpdateFormItem/api/form_builder_service/v1/form_project/form_item/update/${instanceId}`,
    data,
    options
  );
