/** olap接口order定义 */
export interface ModelOrder {
  /** 要排序的字段 */
  name: string;

  /** 顺序 */
  order: "asc" | "desc";
}
