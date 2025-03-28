import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmMemory } from "../../../model/llm";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsMemoryApi_GetLlmMemoryWithConversationIdAndKeyRequestBody {
  /** 会话id */
  conversationId?: string;

  /** 记忆key */
  memKey?: string;
}

export interface AiopsMemoryApi_GetLlmMemoryWithConversationIdAndKeyResponseBody {
  /** 大模型记忆 */
  memory?: Partial<ModelLlmMemory>;
}

/**
 * @description 通过会话id和记忆key获取大模型记忆
 * @endpoint POST /api/v1/llm/aiops_service/memory/get_with_conversation_and_key
 */
export const AiopsMemoryApi_getLlmMemoryWithConversationIdAndKey = async (
  data: AiopsMemoryApi_GetLlmMemoryWithConversationIdAndKeyRequestBody,
  options?: HttpOptions
): Promise<AiopsMemoryApi_GetLlmMemoryWithConversationIdAndKeyResponseBody> =>
  /**! @contract easyops.api.llm.aiops_memory.GetLlmMemoryWithConversationIdAndKey@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsMemoryApi_GetLlmMemoryWithConversationIdAndKeyResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/memory/get_with_conversation_and_key",
      data,
      options
    )
  ).data;
