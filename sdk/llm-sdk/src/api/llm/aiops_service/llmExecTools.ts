import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_LlmExecToolsRequestBody {
  /** 工具id */
  toolId: string;

  /** 输入的参数 */
  parameters?: Record<string, any>;

  /** 当前任务上下文的id */
  conversationId?: string;

  /** 在多agent场景，指定使用哪个agent */
  agentId?: string;

  /** 执行工具的过程id */
  callId?: string;
}

export interface AiopsServiceApi_LlmExecToolsResponseBody {
  /** 执行工具的结果 */
  data?: any;

  /** 执行工具的过程id */
  callId?: string;
}

/**
 * @description 大模型执行工具
 * @endpoint POST /api/v1/llm/aiops_service/tools/exec
 */
export const AiopsServiceApi_llmExecTools = async (
  data: AiopsServiceApi_LlmExecToolsRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmExecToolsResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMExecTools@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmExecToolsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/tools/exec",
      data,
      options
    )
  ).data;
