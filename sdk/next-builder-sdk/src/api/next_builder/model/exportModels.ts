import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ModelApi_ExportModelsRequestBody {
  /** projectId */
  projectId?: string;

  /** 模型定义来源 */
  isModelCenter?: boolean;

  /** 模型列表 */
  objectList?: Partial<ModelCmdbObject>[];
}

export interface ModelApi_ExportModelsResponseBody {
  /** projectId */
  projectId?: string;
}

/**
 * @description 同步模型到开发环境
 * @endpoint POST /api/v1/model/export
 */
export const ModelApi_exportModels = async (
  data: ModelApi_ExportModelsRequestBody,
  options?: HttpOptions
): Promise<ModelApi_ExportModelsResponseBody> =>
  /**! @contract easyops.api.next_builder.model.ExportModels@1.0.0 */ (
    await http.post<ResponseBodyWrapper<ModelApi_ExportModelsResponseBody>>(
      "api/gateway/next_builder.model.ExportModels/api/v1/model/export",
      data,
      options
    )
  ).data;
