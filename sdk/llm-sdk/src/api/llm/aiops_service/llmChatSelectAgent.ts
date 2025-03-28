import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatSelectAgentRequest,
  ModelLlmChatSelectAgentResponse,
} from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type AiopsServiceApi_LlmChatSelectAgentRequestBody =
  Partial<ModelLlmChatSelectAgentRequest>;

/** 接口返回选择agent的结果，有breakMsg时，需要中断 */
export type AiopsServiceApi_LlmChatSelectAgentResponseBody =
  Partial<ModelLlmChatSelectAgentResponse>;

/**
 * @description 大模型选择处理的agent
 * @endpoint POST /api/v1/llm/aiops_service/agent/select
 */
export const AiopsServiceApi_llmChatSelectAgent = async (
  data: AiopsServiceApi_LlmChatSelectAgentRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmChatSelectAgentResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMChatSelectAgent@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmChatSelectAgentResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/agent/select",
      data,
      options
    )
  ).data;
