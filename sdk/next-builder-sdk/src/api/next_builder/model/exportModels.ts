import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ExportModelsRequestBody {
  /** projectId */
  projectId?: string;

  /** 模型列表 */
  objectList?: Partial<ModelCmdbObject>[];
}

export interface ExportModelsResponseBody {
  /** projectId */
  projectId?: string;
}

/**
 * @description 同步模型到开发环境
 * @endpoint POST /api/v1/model/export
 */
export const exportModels = async (
  data: ExportModelsRequestBody,
  options?: HttpOptions
): Promise<ExportModelsResponseBody> =>
  /**! @contract easyops.api.next_builder.model.ExportModels */ (
    await http.post<ResponseBodyWrapper<ExportModelsResponseBody>>(
      "api/gateway/next_builder.model.ExportModels/api/v1/model/export",
      data,
      options
    )
  ).data;
