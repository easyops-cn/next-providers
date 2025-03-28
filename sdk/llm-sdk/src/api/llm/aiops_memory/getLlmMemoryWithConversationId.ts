import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmMemory } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsMemoryApi_GetLlmMemoryWithConversationIdRequestBody {
  /** 会话id */
  conversationId?: string;
}

export interface AiopsMemoryApi_GetLlmMemoryWithConversationIdResponseBody {
  /** 大模型记忆 */
  memories?: Partial<ModelLlmMemory>[];
}

/**
 * @description 通过会话id获取大模型记忆
 * @endpoint POST /api/v1/llm/aiops_service/memory/get_with_conversation
 */
export const AiopsMemoryApi_getLlmMemoryWithConversationId = async (
  data: AiopsMemoryApi_GetLlmMemoryWithConversationIdRequestBody,
  options?: HttpOptions
): Promise<AiopsMemoryApi_GetLlmMemoryWithConversationIdResponseBody> =>
  /**! @contract easyops.api.llm.aiops_memory.GetLlmMemoryWithConversationId@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsMemoryApi_GetLlmMemoryWithConversationIdResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/get_with_conversation",
      data,
      options
    )
  ).data;
