import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmMemory } from "../../../model/llm";

export interface AiopsMemoryApi_UpsertLlmMemoryWithConversationIdAndKeyRequestBody {
  /** 需要更新或插入的记忆 */
  memories?: Partial<ModelLlmMemory>[];
}

/**
 * @description 通过会话id和记忆key导入大模型记忆
 * @endpoint POST /api/v1/llm/aiops_service/memory/upsert/:conversationId
 */
export const AiopsMemoryApi_upsertLlmMemoryWithConversationIdAndKey = (
  conversationId: string | number,
  data: AiopsMemoryApi_UpsertLlmMemoryWithConversationIdAndKeyRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.aiops_memory.UpsertLlmMemoryWithConversationIdAndKey@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/upsert/${conversationId}`,
    data,
    options
  );
