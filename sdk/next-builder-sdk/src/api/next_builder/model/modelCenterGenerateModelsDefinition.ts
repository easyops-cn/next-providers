import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ModelCenterGenerateModelsDefinitionRequestBody {
  /** 模型instanceId */
  instanceIds: string[];
}

export interface ModelCenterGenerateModelsDefinitionResponseBody {
  /** 模型列表 */
  objectList?: Partial<ModelCmdbObject>[];
}

/**
 * @description ModelCenter由模型定义生成ModelsDefinition
 * @endpoint POST /api/v1/model-center/generate-models-definition
 */
export const modelCenterGenerateModelsDefinition = async (
  data: ModelCenterGenerateModelsDefinitionRequestBody,
  options?: HttpOptions
): Promise<ModelCenterGenerateModelsDefinitionResponseBody> =>
  /**! @contract easyops.api.next_builder.model.ModelCenterGenerateModelsDefinition */ (
    await http.post<
      ResponseBodyWrapper<ModelCenterGenerateModelsDefinitionResponseBody>
    >(
      "api/gateway/next_builder.model.ModelCenterGenerateModelsDefinition/api/v1/model-center/generate-models-definition",
      data,
      options
    )
  ).data;
