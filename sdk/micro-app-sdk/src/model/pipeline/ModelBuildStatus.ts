/** 构建状态 */
export interface ModelBuildStatus {
  /** 构建状态 */
  state:
    | "pending"
    | "running"
    | "succeeded"
    | "failed"
    | "paused"
    | "terminated"
    | "terminating"
    | "approving";

  /** 运行的节点 */
  nodeName: string;

  /** 开始时间 */
  started: number;

  /** 更新时间 */
  updated: number;

  /** 完成时间 */
  finished: number;
}
