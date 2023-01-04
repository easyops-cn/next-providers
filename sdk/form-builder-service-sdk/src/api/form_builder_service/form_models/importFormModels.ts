import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormModelsApi_ImportFormModelsRequestBody {
  /** 导入信息列表 */
  importInfos?: FormModelsApi_ImportFormModelsRequestBody_importInfos_item[];
}

export interface FormModelsApi_ImportFormModelsResponseBody {
  /** 模型实例id列表 */
  instanceIdList?: string[];
}

/**
 * @description 引入表单模型
 * @endpoint PUT /api/form_builder_service/v1/form_models/create/form_project/:projectId
 */
export const FormModelsApi_importFormModels = async (
  projectId: string | number,
  data: FormModelsApi_ImportFormModelsRequestBody,
  options?: HttpOptions
): Promise<FormModelsApi_ImportFormModelsResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_models.ImportFormModels@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<FormModelsApi_ImportFormModelsResponseBody>
    >(
      `api/gateway/form_builder_service.form_models.ImportFormModels/api/form_builder_service/v1/form_models/create/form_project/${projectId}`,
      data,
      options
    )
  ).data;

export interface FormModelsApi_ImportFormModelsRequestBody_importInfos_item {
  /** 类型 */
  modelType?: string;

  /** 模型列表 */
  models?: FormModelsApi_ImportFormModelsRequestBody_importInfos_item_models_item[];
}

export interface FormModelsApi_ImportFormModelsRequestBody_importInfos_item_models_item {
  /** 模型Id(objectId, table name) */
  modelId?: string;

  /** 模型详情(仅在导入非 cmdb 类型模型需要填写) */
  details?: Record<string, any>;
}
