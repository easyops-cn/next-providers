/** 变更历史 */
export interface ModelChangeHistory {
  /** 操作 */
  operation: string;

  /** 执行用户 */
  operator: string;

  /** 变更摘要 */
  detail: string;

  /** 操作时间 */
  time: number;
}
