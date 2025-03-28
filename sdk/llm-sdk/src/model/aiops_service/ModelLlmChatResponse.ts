import { ModelLlmChatMessage } from ".";

/** 聊天机器人，聊天请求 */
export interface ModelLlmChatResponse {
  /** 模型名称，消息内容。目前先只返回这个 */
  content: string;

  /** 任务ID */
  id: string;

  /** 请求创建时间，是以秒为单位的 Unix 时间戳 */
  created: number;

  /** 模型名称 */
  model: string;

  /** 当前对话的模型输出内容 */
  choices: ModelLlmChatResponse_choices_item[];

  /** 结束时返回本次模型调用的 tokens 数量统计。 */
  usage: ModelLlmChatResponse_usage;
}

export interface ModelLlmChatResponse_choices_item {
  /** 结果下标 */
  index?: number;

  /** 模型推理终止的原因。stop代表推理自然结束或触发停止词。tool_calls 代表模型命中函数。length代表到达,tokens长度上限。 */
  finish_reason?: string;

  /** 模型返回的文本信息 */
  message?: Partial<ModelLlmChatMessage>;
}

export interface ModelLlmChatResponse_usage {
  /** 用户输入的 tokens 数量 */
  prompt_tokens?: number;

  /** 模型输入的 tokens 数量 */
  completion_tokens?: number;

  /** 总 tokens 数量 */
  total_tokens?: number;
}
