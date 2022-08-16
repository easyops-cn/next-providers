import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_InitFormItemRootNodeRequestBody {
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

/**
 * @description 初始化表单项根节点
 * @endpoint POST /api/form_builder_service/v1/form_project/form_item/create/:templateId
 */
export const FormProjectApi_initFormItemRootNode = (
  templateId: string | number,
  data: FormProjectApi_InitFormItemRootNodeRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.InitFormItemRootNode@1.0.0 */ http.post<void>(
    `api/gateway/form_builder_service.form_project.InitFormItemRootNode/api/form_builder_service/v1/form_project/form_item/create/${templateId}`,
    data,
    options
  );
