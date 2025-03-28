import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface VirtualBuilderApi_GenerateStoryboardStreamRequestBody {
  /** 用户输入 */
  userInput: string;

  /** 会话id */
  sessionId?: string;
}

export interface VirtualBuilderApi_GenerateStoryboardStreamResponseBody {
  /** websocket消息信息 */
  websocket?: VirtualBuilderApi_GenerateStoryboardStreamResponseBody_websocket;

  /** 会话id */
  sessionId?: string;
}

/**
 * @description 流式自动生成brick
 * @endpoint POST /api/v1/llm/virtual_builder/generate_storyboard/stream
 */
export const VirtualBuilderApi_generateStoryboardStream = async (
  data: VirtualBuilderApi_GenerateStoryboardStreamRequestBody,
  options?: HttpOptions
): Promise<VirtualBuilderApi_GenerateStoryboardStreamResponseBody> =>
  /**! @contract easyops.api.llm.virtual_builder.GenerateStoryboardStream@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<VirtualBuilderApi_GenerateStoryboardStreamResponseBody>
    >(
      "api/gateway/logic.llm.virtual_builder/api/v1/llm/virtual_builder/generate_storyboard/stream",
      data,
      options
    )
  ).data;

export interface VirtualBuilderApi_GenerateStoryboardStreamResponseBody_websocket {
  /** websocket消息的system */
  system?: string;

  /** websocket消息的topic */
  topic?: string;
}
