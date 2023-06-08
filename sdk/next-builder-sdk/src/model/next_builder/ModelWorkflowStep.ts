/** 工作流步骤定义 */
export interface ModelWorkflowStep {
  /** id */
  id: string;

  /** name */
  name: string;

  /** 分类 */
  category: string;

  /** 步骤类型 */
  type: "approval" | "cc" | "condition" | "gateway" | "start" | "end";

  /** 是否并行 */
  parallel: boolean;

  /** 步骤配置 */
  settings: Record<string, any>;

  /** 每个步骤的具体信息， 比如审批步骤有approvers/actType, 条件步骤有condition信息 */
  stepInfo: Record<string, any>;

  /** 前置步骤id */
  pre: string[];

  /** 后置步骤id */
  next: string[];

  /** 父步骤id */
  parent: string;

  /** 子步骤id */
  children: string[];
}
