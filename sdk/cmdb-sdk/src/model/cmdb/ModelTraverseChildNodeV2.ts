/** TraverseChildNodeV2 */
export interface ModelTraverseChildNodeV2 {
  /** 父节点指向当前节点的关系字段, 比如 APP的 owner, CLUSTER 的 deviceList */
  parentOut: string;

  /** 当前图所有实例的过滤条件 (过滤条件不仅支持属性的过滤，也支持关系字段的过滤) */
  query: Record<string, any>;

  /** 指定返回此关系指向模型的fields,支持子模型属性 */
  select_fields: string[];

  /** 自递归深度 -1表示不限深度 */
  depth: number;

  /** 子节点列表 */
  child: Partial<ModelTraverseChildNodeV2>[];

  /** 当前边属性过滤条件 */
  relation_query: Record<string, any>;

  /** 指定返回此关系属性的fields */
  relation_fields: string[];

  /** 关系是父模型时，可以通过object_id限制成子模型 */
  object_id: string;
}
