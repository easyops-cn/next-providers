import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 通过会话id删除大模型记忆
 * @endpoint DELETE /api/v1/llm/aiops_service/memory/delete/:conversationId
 */
export const AiopsMemoryApi_deleteLlmMemoryWithConversationId = (
  conversationId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.aiops_memory.DeleteLlmMemoryWithConversationId@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/delete/${conversationId}`,
    options
  );
