import { ModelFieldContract } from ".";

/** 模型契约定义 */
export interface ModelModelContract {
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
