/** mock规则 */
export interface ModelMockRule {
  /** mock规则名称 */
  name: string;

  /** mock标签 */
  tag: string[];

  /** 规则优先级 */
  priority: number;

  /** method */
  method: string;

  /** uri */
  uri: string;

  /** 契约名字 */
  contractName: string;

  /** 契约版本 */
  contractVersion: string;

  /** 命名空间 */
  namespace: string;

  /** 契约全名， contractName+contractVersion */
  contractFullName: string;

  /** 关联契约instanceId */
  contractInstanceId: string;

  /** requestHeader */
  requestHeader: ModelMockRule_requestHeader_item[];

  /** requestUrl */
  requestUrl: ModelMockRule_requestUrl_item[];

  /** requestQuery */
  requestQuery: ModelMockRule_requestQuery_item[];

  /** requestBody */
  requestBody: ModelMockRule_requestBody_item[];

  /** 响应数据 */
  responseData: ModelMockRule_responseData;
}

export interface ModelMockRule_requestHeader_item {
  /** 请求头部参数名 */
  name?: string;

  /** 请求头部校验规则 */
  validateRule?: string;

  /** value */
  value?: string;
}

export interface ModelMockRule_requestUrl_item {
  /** 参数名 */
  name?: string;

  /** 校验规则 */
  validateRule?: string;

  /** value */
  value?: string;
}

export interface ModelMockRule_requestQuery_item {
  /** 参数名 */
  name?: string;

  /** 校验规则 */
  validateRule?: string;

  /** value */
  value?: string;
}

export interface ModelMockRule_requestBody_item {
  /** 参数名 */
  name?: string;

  /** 校验规则 */
  validateRule?: string;

  /** value */
  value?: string;
}

export interface ModelMockRule_responseData {
  /** 响应状态码 */
  status?: number;

  /** 返回数据的定义方式， 目前有两种：json/跟随文档 */
  constructor?: string;

  /** 响应内容 */
  body?: string;

  /** header */
  header?: Record<string, any>;

  /** 响应延迟时间 */
  delayTime?: number;
}
