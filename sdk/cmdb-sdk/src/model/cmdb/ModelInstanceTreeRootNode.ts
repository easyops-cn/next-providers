import { ModelInstanceTreeChildNode } from ".";

/** 树根节点定义 */
export interface ModelInstanceTreeRootNode {
  /** 模型ID */
  object_id: string;

  /** 查询条件, 实例树搜索接口此参数无效 */
  query: Record<string, any>;

  /** 过滤的字段列表, 留空代表返回所有字段(true: 表示指定获取字段, false: 表示指定不获取的字段) */
  fields: Record<string, any>;

  /** 子节点列表 */
  child: Partial<ModelInstanceTreeChildNode>[];
}
