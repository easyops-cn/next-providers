import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatRequest,
  ModelLlmChatResponse,
} from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type AiopsServiceApi_LlmChatServiceRequestBody =
  Partial<ModelLlmChatRequest>;

/** 接口返回,有两种格式,流式返回为sseDataList:[{"role":"assistant","content":"abc"}],非流式返回为LLMChatResponse */
export type AiopsServiceApi_LlmChatServiceResponseBody =
  Partial<ModelLlmChatResponse> & AiopsServiceApi_LlmChatServiceResponseBody_2;

/**
 * @description 大模型聊天接口
 * @endpoint POST /api/v1/llm/aiops_service/chat_service
 */
export const AiopsServiceApi_llmChatService = async (
  data: AiopsServiceApi_LlmChatServiceRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmChatServiceResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMChatService@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmChatServiceResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/chat_service",
      data,
      options
    )
  ).data;

export interface AiopsServiceApi_LlmChatServiceResponseBody_2 {
  /** 流式数据列表 */
  sseDataList?: any[];
}
