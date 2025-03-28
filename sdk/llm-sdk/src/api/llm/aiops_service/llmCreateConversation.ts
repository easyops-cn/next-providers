import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_LlmCreateConversationRequestBody {
  /** sessionId */
  sessionId?: string;

  /** 会话标题 */
  conversationTitle?: string;

  /** 助手id */
  robotId?: string;
}

export interface AiopsServiceApi_LlmCreateConversationResponseBody {
  /** 会话ID */
  conversationId?: string;
}

/**
 * @description 大模型新建会话
 * @endpoint POST /api/v1/llm/aiops_service/conversation/create
 */
export const AiopsServiceApi_llmCreateConversation = async (
  data: AiopsServiceApi_LlmCreateConversationRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmCreateConversationResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMCreateConversation@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmCreateConversationResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/conversation/create",
      data,
      options
    )
  ).data;
