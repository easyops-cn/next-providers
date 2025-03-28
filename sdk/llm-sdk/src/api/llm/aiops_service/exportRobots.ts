import { http, HttpOptions } from "@next-core/brick-http";

export interface AiopsServiceApi_ExportRobotsRequestBody {
  /** 需要导出的robot id */
  robots: string[];
}

/**
 * @description 导出robots
 * @endpoint POST /api/v1/llm/aiops_service/robots/export
 */
export const AiopsServiceApi_exportRobots = (
  data: AiopsServiceApi_ExportRobotsRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.llm.aiops_service.ExportRobots@1.0.0 */ http.post<Blob>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/robots/export",
    data,
    { ...options, responseType: "blob" }
  );
