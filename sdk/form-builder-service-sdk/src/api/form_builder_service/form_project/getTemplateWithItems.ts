import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelFormTpl,
  ModelFormItem,
} from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type FormProjectApi_GetTemplateWithItemsResponseBody =
  Partial<ModelFormTpl> & FormProjectApi_GetTemplateWithItemsResponseBody_2;

/**
 * @description 获取模版及关联表单项
 * @endpoint GET /api/form_builder_service/v1/form_project/form_template/form_item/retrieve/:templateId
 */
export const FormProjectApi_getTemplateWithItems = async (
  templateId: string | number,
  options?: HttpOptions
): Promise<FormProjectApi_GetTemplateWithItemsResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.GetTemplateWithItems@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<FormProjectApi_GetTemplateWithItemsResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.GetTemplateWithItems/api/form_builder_service/v1/form_project/form_template/form_item/retrieve/${templateId}`,
      options
    )
  ).data;

export interface FormProjectApi_GetTemplateWithItemsResponseBody_2 {
  /** 所属表单模版Id */
  modelId?: string;

  /** 表单项链 */
  itemChain?: FormProjectApi_GetTemplateWithItemsResponseBody_itemChain;

  /** 表单项列表 */
  formItemList?: Partial<ModelFormItem>[];
}

export interface FormProjectApi_GetTemplateWithItemsResponseBody_itemChain {
  /** 关系 */
  relation?: FormProjectApi_GetTemplateWithItemsResponseBody_itemChain_relation_item[];
}

export interface FormProjectApi_GetTemplateWithItemsResponseBody_itemChain_relation_item {
  /** 父表单项id */
  parentId?: string;

  /** 子表单项id */
  sonId?: string;
}
