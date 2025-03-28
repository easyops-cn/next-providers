/** 调用语言模型时，将当前对话信息列表作为提示输入给模型， 按照 {"role": "user", "content": "你好"} 的json 数组形式进行传参； 可能的消息类型包括 System message、User message、Assistant message 和 Tool message。 */
export interface ModelLlmChatMessage {
  /** 消息的角色信息, system, user, assistant, tool */
  role: string;

  /** 消息内容。其中包括了tool_calls字段,content字段为空。角色为tool时，tool_message消息内容,为工具被调用后返回的结果 */
  content: string;

  /** 模型产生的工具调用消息 */
  tool_calls: ModelLlmChatMessage_tool_calls_item[];

  /** tool的调用记录 */
  tool_call_id: string;

  /** 图片的url，支持多个图片 */
  images: string[];
}

export interface ModelLlmChatMessage_tool_calls_item {
  /** 工具id */
  id?: string;

  /** 工具类型,支持web_search、retrieval、function */
  type?: string;

  /** type为"function"时不为空 */
  function?: ModelLlmChatMessage_tool_calls_item_function;
}

export interface ModelLlmChatMessage_tool_calls_item_function {
  /** 函数名称 */
  name?: string;

  /** 模型生成的调用函数的参数列表，json 格式。请注意，模型可能会生成无效的JSON，也可能会虚构一些不在您的函数规范中的参数。在调用函数之前，请在代码中验证这些参数是否有效。 */
  arguments?: string;
}
