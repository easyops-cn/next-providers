import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLlmChatMessage } from "../../../model/aiops_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AiopsToolsApi_SummaryQuestionV2RequestBody {
  /** 总结提示词模版引擎，为空时，使用默认模板 */
  template?: string;

  /** 模板引擎的数据，默认会注入 input 变量 */
  variables?: Record<string, any>;

  /** 大模型id */
  model?: string;

  /** 历史对话消息 */
  historyMessages?: Partial<ModelLlmChatMessage>[];

  /** 输入的问题 */
  input?: string;

  /** system角色的提示词模板 */
  systemTemplate?: string;

  /** system模板所需要的数据 */
  systemVariables?: Record<string, any>;

  /** 输入的图片url */
  images?: string[];
}

export interface AiopsToolsApi_SummaryQuestionV2ResponseBody {
  /** 总结后的新问题 */
  data?: string;
}

/**
 * @description 根据模板与大模型对话，总结用户问题
 * @endpoint POST /api/v1/llm/tools/summary_question_v2
 */
export const AiopsToolsApi_summaryQuestionV2 = async (
  data: AiopsToolsApi_SummaryQuestionV2RequestBody,
  options?: HttpOptions
): Promise<AiopsToolsApi_SummaryQuestionV2ResponseBody> =>
  /**! @contract easyops.api.llm.aiops_tools.SummaryQuestionV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsToolsApi_SummaryQuestionV2ResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/tools/summary_question_v2",
      data,
      options
    )
  ).data;
