import { http, HttpOptions } from "@next-core/brick-http";

export interface FormModelsApi_ImportCompleteModelsBatchRequestBody {
  /** 导入模型信息 */
  importInfos?: FormModelsApi_ImportCompleteModelsBatchRequestBody_importInfos_item[];
}

/**
 * @description 批量创建表单模型
 * @endpoint POST /api/form_builder/v1/project/:projectId/models/batch_import
 */
export const FormModelsApi_importCompleteModelsBatch = (
  projectId: string | number,
  data: FormModelsApi_ImportCompleteModelsBatchRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_models.ImportCompleteModelsBatch@1.0.0 */ http.post<void>(
    `api/gateway/form_builder_service.form_models.ImportCompleteModelsBatch/api/form_builder/v1/project/${projectId}/models/batch_import`,
    data,
    options
  );

export interface FormModelsApi_ImportCompleteModelsBatchRequestBody_importInfos_item {
  /** 模型Id(objectId, table name) */
  modelId?: string;

  /** 模型名 */
  modelName?: string;

  /** 模型字段信息 */
  modelFields?: FormModelsApi_ImportCompleteModelsBatchRequestBody_importInfos_item_modelFields_item[];
}

export interface FormModelsApi_ImportCompleteModelsBatchRequestBody_importInfos_item_modelFields_item {
  /** id */
  fieldId?: string;

  /** 字段名 */
  name?: string;

  /** 类型 */
  fieldType?: string;

  /** 是否必填 */
  required?: boolean;

  /** 是否唯一 */
  unique?: boolean;
}
