import { http, HttpOptions } from "@next-core/brick-http";

export interface AiopsServiceApi_ExportToolsRequestBody {
  /** 需要导出的tool id */
  tools: string[];
}

/**
 * @description 导出工具
 * @endpoint POST /api/v1/llm/aiops_service/tools/export
 */
export const AiopsServiceApi_exportTools = (
  data: AiopsServiceApi_ExportToolsRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.llm.aiops_service.ExportTools@1.0.0 */ http.post<Blob>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/tools/export",
    data,
    { ...options, responseType: "blob" }
  );
