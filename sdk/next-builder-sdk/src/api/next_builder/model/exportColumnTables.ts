import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ModelApi_ExportColumnTablesRequestBody {
  /** 列模型instanceIds */
  instanceIds: string[];

  /** 只包含发布模型 */
  onlyReleased?: boolean;
}

export interface ModelApi_ExportColumnTablesResponseBody {
  /** 列模型定义 */
  list?: Record<string, any>[];
}

/**
 * @description 导出列模型
 * @endpoint POST /api/v1/model-center/column/export
 */
export const ModelApi_exportColumnTables = async (
  data: ModelApi_ExportColumnTablesRequestBody,
  options?: HttpOptions
): Promise<ModelApi_ExportColumnTablesResponseBody> =>
  /**! @contract easyops.api.next_builder.model.ExportColumnTables@1.0.1 */ (
    await http.post<
      ResponseBodyWrapper<ModelApi_ExportColumnTablesResponseBody>
    >(
      "api/gateway/next_builder.model.ExportColumnTables/api/v1/model-center/column/export",
      data,
      options
    )
  ).data;
