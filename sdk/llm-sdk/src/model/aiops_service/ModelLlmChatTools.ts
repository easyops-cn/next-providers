/** 外部工具信息 */
export interface ModelLlmChatTools {
  /** 工具类型,目前支持function、retrieval(智谱知识库)、web_search */
  type: string;

  /** 仅当工具类型为function时补充 */
  function: ModelLlmChatTools_function;

  /** 仅当工具类型为retrieval时补充 */
  retrieval: ModelLlmChatTools_retrieval;

  /** 仅当工具类型为web_search时补充，如果tools中存在类型retrieval，此时web_search不生效。 */
  web_search: ModelLlmChatTools_web_search;
}

export interface ModelLlmChatTools_function {
  /** 函数名称，只能包含a-z，A-Z，0-9，下划线和中横线。最大长度限制为64 */
  name?: string;

  /** 用于描述函数功能。模型会根据这段描述决定函数调用方式。 */
  description?: string;

  /** parameter 字段需要传入一个 Json Schema 对象，以准确地定义函数所接受的参数。若调用函数时不需要传入参数 */
  parameters?: Record<string, any>;
}

export interface ModelLlmChatTools_retrieval {
  /** 当涉及到知识库ID时，请前往开放平台的知识库模块进行创建或获取。 */
  knowledge_id?: string;

  /** 请求模型时的知识库模板 */
  prompt_template?: string;
}

export interface ModelLlmChatTools_web_search {
  /** 默认启用搜索 */
  enable?: boolean;

  /** 强制搜索自定义关键内容，此时模型会根据自定义搜索关键内容返回的结果作为背景知识来回答用户发起的对话。 */
  search_query?: string;
}
