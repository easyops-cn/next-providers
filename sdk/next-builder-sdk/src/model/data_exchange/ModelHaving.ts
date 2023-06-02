/** olap接口having定义 */
export interface ModelHaving {
  /** 过滤字段 */
  name: string;

  /** 操作符 */
  operator: "==" | "!=" | "=~" | "!~" | ">" | "<" | ">=" | "<=";

  /** 比较值 */
  value: any;
}
