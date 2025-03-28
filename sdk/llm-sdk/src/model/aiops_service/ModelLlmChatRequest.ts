import { ModelLlmChatMessage, ModelLlmChatTools } from ".";

/** 聊天机器人，聊天请求 */
export interface ModelLlmChatRequest {
  /** 是否需要启用敏感词过滤，默认true */
  enableSensitiveWordsFilter: boolean;

  /** 大模型服务名字，支持：zhipu */
  service_name: string;

  /** 所要调用的模型编码，例如：glm-4 */
  model: string;

  /** 对话列表 */
  messages: Partial<ModelLlmChatMessage>[];

  /** 由用户端传参，需保证唯一性；用于区分每次请求的唯一标识，用户端不传时平台会默认生成。 */
  request_id: string;

  /** do_sample 为 true 时启用采样策略，do_sample 为 false 时采样策略 temperature、top_p 将不生效 */
  do_sample: boolean;

  /** 采样温度，控制输出的随机性，必须为正数
取值范围是：(0.0, 1.0)，不能等于 0，默认值为 0.95，值越大，会使输出更随机，更具创造性；值越小，输出会更加稳定或确定
建议您根据应用场景调整 top_p 或 temperature 参数，但不要同时调整两个参数 */
  temperature: number;

  /** 模型输出最大 tokens，最大输入为8192，默认值为1024 */
  max_tokens: number;

  /** 可供模型调用的工具列表,tools 字段会计算 tokens ，同样受到 tokens 长度的限制 */
  tools: Partial<ModelLlmChatTools>[];

  /** 字符串或者对象,none means the model will not call any tool and instead generates a message. auto means the model can pick between generating a message or calling one or more tools. required means the model must call one or more tools.Specifying a particular tool via {"type": "function", "function": {"name": "my_function"}} forces the model to call that tool. */
  tool_choice: any;

  /** 是否使用流式 */
  stream: boolean;
}
