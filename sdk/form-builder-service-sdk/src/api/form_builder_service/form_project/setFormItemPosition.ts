import { http, HttpOptions } from "@next-core/brick-http";

export interface FormProjectApi_SetFormItemPositionRequestBody {
  /** 表单项顺序列表(有序) 其中 mountPoint 字段若为 null 则需要清空字段 */
  itemSortList?: FormProjectApi_SetFormItemPositionRequestBody_itemSortList_item[];

  /** 是否为草稿状态 */
  isDraft: boolean;

  /** 表单实例id */
  formTemplateId: string;
}

/**
 * @description 设置表单项位置
 * @endpoint POST /api/form_builder_service/v1/form_item/update/item_position
 */
export const FormProjectApi_setFormItemPosition = (
  data: FormProjectApi_SetFormItemPositionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.SetFormItemPosition@1.0.0 */ http.post<void>(
    "api/gateway/form_builder_service.form_project.SetFormItemPosition/api/form_builder_service/v1/form_item/update/item_position",
    data,
    options
  );

export interface FormProjectApi_SetFormItemPositionRequestBody_itemSortList_item {
  /** 实例id */
  instanceId?: string;

  /** 挂载点 */
  mountPoint?: string;

  /** 父表单项实例Id */
  parentItemId?: string;
}
