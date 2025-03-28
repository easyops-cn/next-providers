import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatAgentTaskRequest,
  ModelLlmChatAgentTaskResponse,
} from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type AgentApi_BaseGeneralAgentRequestBody =
  Partial<ModelLlmChatAgentTaskRequest>;

/** 接口返回,有两种格式,流式返回为delta, 非流式返回为message
 */
export type AgentApi_BaseGeneralAgentResponseBody =
  Partial<ModelLlmChatAgentTaskResponse>;

/**
 * @description 基础agent，支持知识库、执行工具
 * @endpoint POST /api/v1/llm/agent/base
 */
export const AgentApi_baseGeneralAgent = async (
  data: AgentApi_BaseGeneralAgentRequestBody,
  options?: HttpOptions
): Promise<AgentApi_BaseGeneralAgentResponseBody> =>
  /**! @contract easyops.api.llm.agent.BaseGeneralAgent@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AgentApi_BaseGeneralAgentResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/base",
      data,
      options
    )
  ).data;
