import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatAgentTaskRequest,
  ModelLlmChatAgentTaskResponse,
} from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type AgentApi_WebSearchAgentRequestBody =
  Partial<ModelLlmChatAgentTaskRequest>;

/** 接口返回,有两种格式,流式返回为delta, 非流式返回为message
 */
export type AgentApi_WebSearchAgentResponseBody =
  Partial<ModelLlmChatAgentTaskResponse>;

/**
 * @description 网络搜索的agent
 * @endpoint POST /api/v1/llm/agent/web_search
 */
export const AgentApi_webSearchAgent = async (
  data: AgentApi_WebSearchAgentRequestBody,
  options?: HttpOptions
): Promise<AgentApi_WebSearchAgentResponseBody> =>
  /**! @contract easyops.api.llm.agent.WebSearchAgent@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AgentApi_WebSearchAgentResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/web_search",
      data,
      options
    )
  ).data;
