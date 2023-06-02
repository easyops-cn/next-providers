/** olap接口filter定义 */
export interface ModelFilter {
  /** 过滤字段 */
  name: string;

  /** 操作符 */
  operator: "==" | "!=" | "=~" | "!~" | ">" | "<" | ">=" | "<=";

  /** 比较值 */
  value: any;
}
