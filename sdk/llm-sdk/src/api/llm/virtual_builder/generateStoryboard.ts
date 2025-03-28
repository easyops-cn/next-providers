import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface VirtualBuilderApi_GenerateStoryboardRequestBody {
  /** 用户输入 */
  userInput: string;

  /** 会话id */
  sessionId?: string;
}

export interface VirtualBuilderApi_GenerateStoryboardResponseBody {
  /** llm的输出 */
  outputs?: VirtualBuilderApi_GenerateStoryboardResponseBody_outputs_item[];

  /** 会话id */
  sessionId?: string;
}

/**
 * @description 自动生成brick
 * @endpoint POST /api/v1/llm/virtual_builder/generate_storyboard
 */
export const VirtualBuilderApi_generateStoryboard = async (
  data: VirtualBuilderApi_GenerateStoryboardRequestBody,
  options?: HttpOptions
): Promise<VirtualBuilderApi_GenerateStoryboardResponseBody> =>
  /**! @contract easyops.api.llm.virtual_builder.GenerateStoryboard@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<VirtualBuilderApi_GenerateStoryboardResponseBody>
    >(
      "api/gateway/logic.llm.virtual_builder/api/v1/llm/virtual_builder/generate_storyboard",
      data,
      options
    )
  ).data;

export interface VirtualBuilderApi_GenerateStoryboardResponseBody_outputs_item {
  /** 输出内容的类型,markdown或者storyboard */
  type?: "markdown" | "storyboard";

  /** 输出内容 */
  content?: string;
}
