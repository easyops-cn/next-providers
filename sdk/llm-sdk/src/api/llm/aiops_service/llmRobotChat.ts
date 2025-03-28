import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatAgentTaskRequest,
  ModelLlmChatAgentTaskResponse,
} from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type AiopsServiceApi_LlmRobotChatRequestBody =
  Partial<ModelLlmChatAgentTaskRequest>;

/** 接口返回,有两种格式,流式返回为delta, 非流式返回为message
 */
export type AiopsServiceApi_LlmRobotChatResponseBody =
  Partial<ModelLlmChatAgentTaskResponse>;

/**
 * @description 大模型助手聊天
 * @endpoint POST /api/v1/llm/aiops_service/robot/chat
 */
export const AiopsServiceApi_llmRobotChat = async (
  data: AiopsServiceApi_LlmRobotChatRequestBody,
  options?: HttpOptions
): Promise<AiopsServiceApi_LlmRobotChatResponseBody> =>
  /**! @contract easyops.api.llm.aiops_service.LLMRobotChat@1.2.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsServiceApi_LlmRobotChatResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_service/robot/chat",
      data,
      options
    )
  ).data;
