import { http, HttpOptions } from "@next-core/brick-http";

export interface AiopsBaseApi_DeleteKnowledgeRequestBody {
  /** 知识库的instanceId */
  instanceId?: string;
}

/**
 * @description 删除知识库
 * @endpoint POST /api/v1/llm/aiops_base/knowledge/delete
 */
export const AiopsBaseApi_deleteKnowledge = (
  data: AiopsBaseApi_DeleteKnowledgeRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.aiops_base.DeleteKnowledge@1.0.0 */ http.post<void>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_base/knowledge/delete",
    data,
    options
  );
