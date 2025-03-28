import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelLlmChatRequest,
  ModelLlmChatResponse,
} from "../../../model/aiops_service";

export type AiopsBaseApi_OpenaiChatRequestBody = Partial<ModelLlmChatRequest>;

/** 接口返回,有两种格式,流式返回为sseDataList:[{"role":"assistant","content":"abc"}],非流式返回为LLMChatResponse */
export type AiopsBaseApi_OpenaiChatResponseBody =
  Partial<ModelLlmChatResponse> & AiopsBaseApi_OpenaiChatResponseBody_2;

/**
 * @description 通用大模型聊天接口, 直接转发返回大模型请求
 * @endpoint POST /v1/chat/completions
 */
export const AiopsBaseApi_openaiChat = (
  data: AiopsBaseApi_OpenaiChatRequestBody,
  options?: HttpOptions
): Promise<AiopsBaseApi_OpenaiChatResponseBody> =>
  /**! @contract easyops.api.llm.aiops_base.OpenaiChat@1.0.0 */ http.post<AiopsBaseApi_OpenaiChatResponseBody>(
    "api/gateway/logic.llm.aiops_service/v1/chat/completions",
    data,
    options
  );

export interface AiopsBaseApi_OpenaiChatResponseBody_2 {
  /** 流式数据列表 */
  sseDataList?: any[];
}
