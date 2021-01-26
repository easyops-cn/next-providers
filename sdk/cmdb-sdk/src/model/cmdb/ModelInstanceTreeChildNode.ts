/** 树子节点定义 */
export interface ModelInstanceTreeChildNode {
  /** 关系字段ID */
  relation_field_id: string;

  /** 过滤的字段列表, 留空代表返回所有字段(true: 表示指定获取字段, false: 表示指定不获取的字段) */
  fields: Record<string, any>;

  /** 忽略与父级无关联实例, 默认false */
  ignore_single: boolean;

  /** 子节点列表 */
  child: Partial<ModelInstanceTreeChildNode>[];
}
