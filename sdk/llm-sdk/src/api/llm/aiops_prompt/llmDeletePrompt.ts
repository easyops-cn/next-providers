import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsPromptApi_LlmDeletePromptRequestBody {
  /** instanceId */
  instanceId?: string;

  /** agent的id */
  agentId?: string;

  /** 对应的key */
  key?: string;

  /** 对应模型的id */
  modelId?: string;
}

export interface AiopsPromptApi_LlmDeletePromptResponseBody {
  /** 删除的提示词的数量 */
  nums?: number;
}

/**
 * @description 删除提示词
 * @endpoint POST /api/v1/llm/aiops_service/prompt/delete
 */
export const AiopsPromptApi_llmDeletePrompt = async (
  data: AiopsPromptApi_LlmDeletePromptRequestBody,
  options?: HttpOptions
): Promise<AiopsPromptApi_LlmDeletePromptResponseBody> =>
  /**! @contract easyops.api.llm.aiops_prompt.LLMDeletePrompt@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsPromptApi_LlmDeletePromptResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/prompt/delete",
      data,
      options
    )
  ).data;
