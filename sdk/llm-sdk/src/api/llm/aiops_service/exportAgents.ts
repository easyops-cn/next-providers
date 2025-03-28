import { http, HttpOptions } from "@next-core/brick-http";

export interface AiopsServiceApi_ExportAgentsRequestBody {
  /** 需要导出的agent id */
  agents: string[];
}

/**
 * @description 导出agent
 * @endpoint POST /api/v1/llm/aiops_service/agents/export
 */
export const AiopsServiceApi_exportAgents = (
  data: AiopsServiceApi_ExportAgentsRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.llm.aiops_service.ExportAgents@1.0.0 */ http.post<Blob>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/agents/export",
    data,
    { ...options, responseType: "blob" }
  );
