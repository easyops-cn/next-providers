/** TraverseChildNode */
export interface ModelTraverseChildNode {
  /** 父节点指向当前节点的关系字段, 比如 APP的 owner, CLUSTER 的 deviceList */
  parentOut: string;

  /** 当前图所有实例的过滤条件 (过滤条件不仅支持属性的过滤，也支持关系字段的过滤) */
  query: Record<string, any>;

  /** 指定返回此关系指向模型的fields */
  fields: Record<string, any>;

  /** 自递归深度 -1表示不限深度 */
  depth: number;

  /** 子节点列表 */
  child: Partial<ModelTraverseChildNode>[];
}
