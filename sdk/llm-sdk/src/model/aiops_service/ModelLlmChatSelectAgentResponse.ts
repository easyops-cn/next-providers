import { ModelLlmChatMessage } from ".";

/** 聊天机器人，选择处理agent的请求返回值 */
export interface ModelLlmChatSelectAgentResponse {
  /** 历史数据 */
  historyMessages: Partial<ModelLlmChatMessage>[];

  /** 当前任务上下文的id */
  conversationId: string;

  /** 中断消息,不再进行转发 */
  breakMsg: string;

  /** 在多agent场景，指定使用哪个agent */
  agentId: string;
}
