import { ModelFieldContract } from ".";

/** 模型契约定义 */
export interface ModelModelContract {
  /** 实例id */
  instanceId: string;

  /** name */
  name: string;

  /** version */
  version: string;

  /** namespaceId */
  namespaceId: string;

  /** type */
  type: string;

  /** description */
  description: string;

  /** eamlVersion */
  eamlVersion: string;

  /** eamlKind */
  eamlKind: string;

  /** import */
  import: string[];

  /** fields */
  fields: Partial<ModelFieldContract>[];

  /** 契约引用到的模型 */
  useModels: ModelModelContract_useModels_item[];

  /** 契约关联的namespace */
  namespace: ModelModelContract_namespace_item[];

  /** response引用的模型信息 */
  modelDefinition: ModelModelContract_modelDefinition_item[];
}

export interface ModelModelContract_useModels_item {
  /** instanceId */
  instanceId?: string;

  /** name */
  name?: string;

  /** version */
  version?: string;

  /** namespaceId */
  namespaceId?: string;
}

export interface ModelModelContract_namespace_item {
  /** 命名空间id */
  id?: string;

  /** instanceId */
  instanceId?: string;
}

export interface ModelModelContract_modelDefinition_item {
  /** 引用的模型name */
  name?: string;

  /** 引用模型的fields信息 */
  fields?: Partial<ModelFieldContract>[];
}
