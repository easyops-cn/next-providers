import { ModelInheritNodeFilter } from ".";

/** 继承规则节点定义 */
export interface ModelInheritNode {
  /** 当前节点模型id */
  objectId: string;

  /** 关系id */
  relationId: string;

  /** 指向下一节点的关系sideId */
  relationSideId: string;

  /** 变更字段 */
  effectFields: string[];

  /** 当前节点查询条件 */
  filters: Partial<ModelInheritNodeFilter>[];
}
