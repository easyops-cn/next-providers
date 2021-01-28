/** 继承规则节点过滤条件 */
export interface ModelInheritNodeFilter {
  /** 字段名称 */
  name: string;

  /** 操作符 */
  operator: "eq" | "ne" | "like" | "lt" | "gt" | "lte" | "gte" | "in";

  /** 比较值 */
  value: any;
}
