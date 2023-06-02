/** 契约示例 */
export interface ModelContractExample {
  /** 契约中英文描述 */
  description: Record<string, any>;

  /** request example */
  request: ModelContractExample_request;

  /** response example */
  response: ModelContractExample_response;
}

export interface ModelContractExample_request {
  /** method */
  method?: string;

  /** uri example */
  uri?: string;

  /** headers */
  headers?: Record<string, any>;

  /** body */
  body?: string;

  /** serviceName */
  serviceName?: string;
}

export interface ModelContractExample_response {
  /** response headers */
  headers?: Record<string, any>;

  /** body */
  body?: string;

  /** status_code */
  status_code?: number;
}
