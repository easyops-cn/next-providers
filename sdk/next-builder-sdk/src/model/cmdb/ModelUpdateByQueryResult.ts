/** 根据查询条件更新实例单个结果 */
export interface ModelUpdateByQueryResult {
  /** 实例id */
  instanceId: string;

  /** 状态码, 成功为0 */
  code: number;

  /** 错误信息，成功为空 */
  message: string;
}
