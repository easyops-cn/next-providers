import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GenerateModelsDefinitionRequestParams {
  /** projectId */
  projectId?: string;
}

export interface GenerateModelsDefinitionResponseBody {
  /** projectId */
  projectId?: string;

  /** 模型列表 */
  objectList?: Partial<ModelCmdbObject>[];
}

/**
 * @description 由模型定义生成ModelsDefinition
 * @endpoint GET /api/v1/model/generate_models_definition
 */
export const generateModelsDefinition = async (
  params: GenerateModelsDefinitionRequestParams,
  options?: HttpOptions
): Promise<GenerateModelsDefinitionResponseBody> =>
  /**! @contract easyops.api.next_builder.model.GenerateModelsDefinition */ (
    await http.get<ResponseBodyWrapper<GenerateModelsDefinitionResponseBody>>(
      "api/gateway/next_builder.model.GenerateModelsDefinition/api/v1/model/generate_models_definition",
      { ...options, params }
    )
  ).data;
