/** 实例聚合操作对象 */
export interface ModelGroupInstanceFunc {
  /** 对字段进行某种操作,min, max, sum, avg, count */
  op: "max" | "avg" | "min" | "sum" | "count";

  /** 操作字段 */
  field: string;

  /** 字段别名 */
  alias: string;
}
