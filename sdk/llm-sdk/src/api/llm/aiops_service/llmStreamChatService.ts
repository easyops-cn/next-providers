import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmChatRequest } from "../../../model/aiops_service";

export type AiopsServiceApi_LlmStreamChatServiceRequestBody =
  Partial<ModelLlmChatRequest>;

export interface AiopsServiceApi_LlmStreamChatServiceResponseBody {
  /** 流式接口，返回的是一个数组。fb会做后置校验，这里最好先声明为value格式且name为data。这个返回的为：{"role":"assistant","content":"土"} */
  data?: any[];
}

/**
 * @description 大模型聊天流式接口
 * @endpoint POST /api/v1/llm/aiops_service/stream_chat_service
 */
export const AiopsServiceApi_llmStreamChatService = (
  data: AiopsServiceApi_LlmStreamChatServiceRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmStreamChatServiceResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMStreamChatService@1.0.0 */ http.post<AiopsServiceApi_LlmStreamChatServiceResponseBody>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/stream_chat_service",
    data,
    options
  );
