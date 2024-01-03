import { ModelStepConfig } from ".";

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
  stepInfo: Partial<ModelStepConfig>;

  /** 步骤数据信息 */
  stepData: Record<string, any>;

  /** type */
  type:
    | "approval"
    | "notice"
    | "condition"
    | "gateway"
    | "start"
    | "end"
    | "cmdb_create"
    | "cmdb_edit"
    | "cmdb_delete"
    | "cmdb_search";

  /** 步骤错误信息 */
  errMsg: string;

  /** 该步骤是否跳过 */
  skipped: boolean;

  /** 当前节点的历史处理信息，主要给回退节点使用 */
  history: Partial<ModelStepConfig>[];
}
