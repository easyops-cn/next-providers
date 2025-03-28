import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsPromptApi_LlmGetPromptRequestBody {
  /** agent的id */
  agentId: string;

  /** 对应的key */
  key: string;

  /** 对应模型的id */
  modelId?: string;
}

export interface AiopsPromptApi_LlmGetPromptResponseBody {
  /** 获取到的提示词 */
  prompt?: string;
}

/**
 * @description 获取提示词
 * @endpoint POST /api/v1/llm/aiops_service/prompt/get
 */
export const AiopsPromptApi_llmGetPrompt = async (
  data: AiopsPromptApi_LlmGetPromptRequestBody,
  options?: HttpOptions
): Promise<AiopsPromptApi_LlmGetPromptResponseBody> =>
  /**! @contract easyops.api.llm.aiops_prompt.LLMGetPrompt@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsPromptApi_LlmGetPromptResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/prompt/get",
      data,
      options
    )
  ).data;
