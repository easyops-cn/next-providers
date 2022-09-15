import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormItem } from "../../../model/form_builder_service";

export interface FormProjectApi_BatchUpdateFormItemRequestBody {
  /** 字段实例列表 */
  formItemList: Partial<ModelFormItem>[];

  /** 是否为草稿状态 */
  isDraft: boolean;
}

/**
 * @description 批量更新表单项
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_item/update_batch
 */
export const FormProjectApi_batchUpdateFormItem = (
  data: FormProjectApi_BatchUpdateFormItemRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.BatchUpdateFormItem@1.0.0 */ http.put<void>(
    "api/gateway/form_builder_service.form_project.BatchUpdateFormItem/api/form_builder_service/v1/form_project/form_item/update_batch",
    data,
    options
  );
