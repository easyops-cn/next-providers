import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatAgentTaskResponse,
  ModelLlmChatMessage,
} from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsServiceApi_LlmAgentChatRequestBody {
  /** 任务需求, 支持模板引擎 */
  inputTemplate?: string;

  /** 模板所需要的数据 */
  inputVariables?: Record<string, any>;

  /** system角色的提示词模板 */
  systemTemplate?: string;

  /** system模板所需要的数据 */
  systemVariables?: Record<string, any>;

  /** 任务配置 */
  config?: Record<string, any>;

  /** 当前任务上下文的id */
  conversationId?: string;

  /** 在多agent场景，指定使用哪个agent */
  agentId?: string;

  /** 当前任务Id */
  taskId?: string;

  /** 已经提取的表单数据 */
  formData?: any;

  /** 输出格式，默认json */
  outputType?: string;

  /** 是否流式返回 */
  stream?: boolean;

  /** 历史会话消息，适用支持多轮会话的agent */
  historyMessages?: Partial<ModelLlmChatMessage>[];

  /** 图片的url，支持多个图片 */
  images?: string[];
}

/** 接口返回,有两种格式,流式返回为delta, 非流式返回为message
 */
export type AiopsServiceApi_LlmAgentChatResponseBody =
  Partial<ModelLlmChatAgentTaskResponse> &
    AiopsServiceApi_LlmAgentChatResponseBody_2;

/**
 * @description 大模型agent对话，不会记录会话历史
 * @endpoint POST /api/v1/llm/aiops_service/agent/chat
 */
export const AiopsServiceApi_llmAgentChat = async (
  data: AiopsServiceApi_LlmAgentChatRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmAgentChatResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMAgentChat@1.2.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmAgentChatResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/agent/chat",
      data,
      options
    )
  ).data;

export interface AiopsServiceApi_LlmAgentChatResponseBody_2 {
  /** 提取返回的数据 */
  data?: any;

  /** 调试时大模型返回值 */
  debug_resp?: string;

  /** 如果解析不到正确的数据格式，则将大模型返回的数据塞到这里 */
  errorOutput?: string;
}
