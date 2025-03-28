import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsPromptApi_LlmUpsertPromptRequestBody {
  /** agent的id */
  agentId: string;

  /** 对应的key */
  key: string;

  /** 对应模型的id */
  modelId?: string;

  /** 描述 */
  description?: string;

  /** 对应的提示词 */
  prompt: string;
}

export interface AiopsPromptApi_LlmUpsertPromptResponseBody {
  /** 插入或更新的实例的instanceId */
  instanceId?: string;
}

/**
 * @description 插入或更新提示词
 * @endpoint POST /api/v1/llm/aiops_service/prompt/upsert
 */
export const AiopsPromptApi_llmUpsertPrompt = async (
  data: AiopsPromptApi_LlmUpsertPromptRequestBody,
  options?: HttpOptions
): Promise<AiopsPromptApi_LlmUpsertPromptResponseBody> =>
  /**! @contract easyops.api.llm.aiops_prompt.LLMUpsertPrompt@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsPromptApi_LlmUpsertPromptResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/prompt/upsert",
      data,
      options
    )
  ).data;
