/** validate数据定义 */
export interface ModelValidateRule {
  /** pattern */
  pattern: string;

  /** gte */
  gte: number;

  /** lte */
  lte: number;

  /** gt */
  gt: number;

  /** lt */
  lt: number;
}
