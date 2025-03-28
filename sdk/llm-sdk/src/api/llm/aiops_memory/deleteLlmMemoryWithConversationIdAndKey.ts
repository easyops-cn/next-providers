import { http, HttpOptions } from "@next-core/brick-http";

export interface AiopsMemoryApi_DeleteLlmMemoryWithConversationIdAndKeyRequestBody {
  /** 记忆key */
  memKey?: string;
}

/**
 * @description 通过会话id和记忆key删除大模型记忆
 * @endpoint POST /api/v1/llm/aiops_service/memory/delete/:conversationId/key
 */
export const AiopsMemoryApi_deleteLlmMemoryWithConversationIdAndKey = (
  conversationId: string | number,
  data: AiopsMemoryApi_DeleteLlmMemoryWithConversationIdAndKeyRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.aiops_memory.DeleteLlmMemoryWithConversationIdAndKey@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/delete/${conversationId}/key`,
    data,
    options
  );
