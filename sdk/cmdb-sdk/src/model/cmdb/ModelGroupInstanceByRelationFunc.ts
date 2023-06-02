/** 实例聚合操作对象 */
export interface ModelGroupInstanceByRelationFunc {
  /** 对字段进行某种操作,min, max, sum, avg, count, naturalMax, naturalMin */
  op: "max" | "avg" | "min" | "sum" | "count" | "naturalMax" | "naturalMin";

  /** 操作字段 */
  field: string;

  /** 字段别名 */
  alias: string;
}
