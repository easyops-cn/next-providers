import { ModelFieldContract } from ".";

/** flowBuilderApiContract契约定义 */
export interface ModelFlowBuilderApiContract {
  /** 契约name */
  name: string;

  /** 命名空间 */
  namespaceId: string;

  /** version */
  version: string;

  /** 契约协议版本 */
  eamlVersion: string;

  /** eamlKind */
  eamlKind: "interface" | "function" | "model" | "type";

  /** 契约类别 */
  classify: "easyops" | "third_party";

  /** 契约描述 */
  description: string;

  /** 接口详情 */
  detail: string;

  /** endpoint */
  endpoint: ModelFlowBuilderApiContract_endpoint;

  /** customController */
  customController: boolean;

  /** deprecated */
  deprecated: boolean;

  /** 示例 */
  examples: Record<string, any>;

  /** private */
  private: boolean;

  /** useApiGateWay */
  useApiGateWay: boolean;

  /** 引用 */
  import: string[];

  /** request */
  request: ModelFlowBuilderApiContract_request;

  /** response */
  response: ModelFlowBuilderApiContract_response;

  /** 契约引用到的模型 */
  useModels: ModelFlowBuilderApiContract_useModels_item[];

  /** 契约关联的project, 一个契约可关联多个项目 */
  projects: ModelFlowBuilderApiContract_projects_item[];
}

export interface ModelFlowBuilderApiContract_endpoint {
  /** 方法 */
  method?: string;

  /** uri */
  uri?: string;

  /** 额外字段 */
  ext_fields?: Record<string, any>;
}

export interface ModelFlowBuilderApiContract_request {
  /** 描述信息 */
  description?: string;

  /** 默认值 */
  default?: Record<string, any>;

  /** 必填字段 */
  required?: string[];

  /** type */
  type?: string;

  /** fields */
  fields?: Partial<ModelFieldContract>[];
}

export interface ModelFlowBuilderApiContract_response {
  /** 描述信息 */
  description?: string;

  /** 默认值 */
  default?: Record<string, any>;

  /** wrapper */
  wrapper?: boolean;

  /** type */
  type?: string;

  /** 必填字段 */
  required?: string[];

  /** fields */
  fields?: Partial<ModelFieldContract>[];
}

export interface ModelFlowBuilderApiContract_useModels_item {
  /** instanceId */
  instanceId?: string;

  /** namespaceId */
  namespaceId?: string;

  /** name */
  name?: string;

  /** version */
  version?: string;
}

export interface ModelFlowBuilderApiContract_projects_item {
  /** instanceId */
  instanceId?: string;

  /** projectId */
  projectId?: string;

  /** name */
  name?: string;
}