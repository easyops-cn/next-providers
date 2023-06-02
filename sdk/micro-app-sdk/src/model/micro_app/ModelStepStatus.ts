/** 步骤状态 */
export interface ModelStepStatus {
  /** step id */
  id: string;

  /** step名称 */
  name: string;

  /** step是否并行 */
  parallel: boolean;

  /** step状态 */
  state:
    | "pending"
    | "running"
    | "succeeded"
    | "failed"
    | "paused"
    | "terminated"
    | "terminating"
    | "approving";

  /** 退出码 */
  exit_code: number;

  /** step开始时间 */
  started: number;

  /** step结束时间 */
  finished: number;

  /** 前置步骤id */
  pre: string[];

  /** 后置步骤id */
  next: string[];

  /** 父步骤id */
  parent: string;

  /** 子步骤id */
  children: string[];

  /** 每个步骤的具体信息， 比如审批步骤有approvers/actType, 条件步骤有condition信息 */
  stepInfo: Record<string, any>;

  /** type */
  type: "approval" | "cc" | "condition" | "gateway" | "start" | "end";

  /** 步骤超时时间 */
  timeout: number;
}
