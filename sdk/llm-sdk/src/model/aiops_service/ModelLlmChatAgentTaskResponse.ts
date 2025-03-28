import { ModelLlmChatMessage } from ".";

/** 聊天机器人，选择处理agent的请求返回值 */
export interface ModelLlmChatAgentTaskResponse {
  /** 任务id */
  taskId: string;

  /** 任务完成的时间戳 */
  created: number;

  /** 非流式输出时返回的消息 */
  message: Partial<ModelLlmChatMessage>;

  /** sse流式返回时的数据格式 */
  delta: Partial<ModelLlmChatMessage>;

  /** 当前任务上下文的id */
  conversationId: string;

  /** 流式数据列表(占位符，防止flow builder自动清理流式返回的数据) */
  sseDataList: any;

  /** 额外信息。ignoreSave: bool, 忽略保存信息，只通过sse发送消息 */
  extInfo: Record<string, any>;

  /** 内容类型，决定该接口返回的内容是什么类型。可选：TEXT，RELATED_QUESTIONS */
  type: string;

  /** 消息名称。llm_response, related_questions */
  name: string;

  /** agentId */
  agentId: string;

  /** 助手id */
  robotId: string;
}
