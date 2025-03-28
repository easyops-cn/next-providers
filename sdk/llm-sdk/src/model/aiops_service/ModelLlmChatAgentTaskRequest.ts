import { ModelLlmChatMessage } from ".";

/** 聊天机器人，处理agent任务的请求 */
export interface ModelLlmChatAgentTaskRequest {
  /** 任务需求 */
  input: string;

  /** 图片的url，支持多个图片 */
  images: string[];

  /** 任务配置 */
  config: Record<string, any>;

  /** 当前任务上下文的id */
  conversationId: string;

  /** 在多agent场景，指定使用哪个agent */
  agentId: string;

  /** 当前任务Id */
  taskId: string;

  /** 已经提取的表单数据 */
  formData: any;

  /** 助手id */
  robotId: string;

  /** 是否流式返回 */
  stream: boolean;

  /** 历史会话消息，适用支持多轮会话的agent */
  historyMessages: Partial<ModelLlmChatMessage>[];

  /** 流式数据列表(占位符，防止flow builder自动清理流式返回的数据) */
  sseDataList: any[];
}
