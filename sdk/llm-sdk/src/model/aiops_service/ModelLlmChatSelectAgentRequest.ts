/** 聊天机器人，选择处理agent的请求参数 */
export interface ModelLlmChatSelectAgentRequest {
  /** 任务需求 */
  input: string;

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

  /** 返回历史数据的数据量 */
  historyLimit: number;
}
