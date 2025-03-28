import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatRequest,
  ModelLlmChatResponse,
} from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type AiopsBaseApi_LlmChatServiceV1RequestBody =
  Partial<ModelLlmChatRequest>;

/** 接口返回,有两种格式,流式返回为sseDataList:[{"role":"assistant","content":"abc"}],非流式返回为LLMChatResponse */
export type AiopsBaseApi_LlmChatServiceV1ResponseBody =
  Partial<ModelLlmChatResponse> & AiopsBaseApi_LlmChatServiceV1ResponseBody_2;

/**
 * @description 大模型聊天接口
 * @endpoint POST /api/v1/llm/aiops_base/chat_service
 */
export const AiopsBaseApi_llmChatServiceV1 = async (
  data: AiopsBaseApi_LlmChatServiceV1RequestBody,
  options?: HttpOptions
): Promise<AiopsBaseApi_LlmChatServiceV1ResponseBody> =>
  /**! @contract easyops.api.llm.aiops_base.LLMChatServiceV1@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsBaseApi_LlmChatServiceV1ResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/aiops_base/chat_service",
      data,
      options
    )
  ).data;

export interface AiopsBaseApi_LlmChatServiceV1ResponseBody_2 {
  /** 流式数据列表 */
  sseDataList?: any[];
}
