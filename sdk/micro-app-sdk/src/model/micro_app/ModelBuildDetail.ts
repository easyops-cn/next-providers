import { ModelStepStatus } from ".";
import { ModelDataDefinition } from "../next_builder";
import { ModelBuildStatus } from "../pipeline";

/** 工作流任务 */
export interface ModelBuildDetail {
  /** 任务id, 服务端自动生成 */
  id: string;

  /** Project AppId */
  projectId: string;

  /** 工作流id */
  workflowId: string;

  /** 工作流名称 */
  workflowName: string;

  /** 工作流的描述信息 */
  description: string;

  /** 触发者，创建的时候传入，不能修改 */
  triggerer: string;

  /** 创建时间，创建的时候传入，不能修改 */
  created: number;

  /** workflow定义 */
  yamlString: string;

  /** 输入 */
  inputs: Partial<ModelDataDefinition>[];

  /** 构建参数 */
  buildVars: Record<string, any>;

  /** step 状态 */
  steps: Partial<ModelStepStatus>[];

  /** 执行状态 */
  status: Partial<ModelBuildStatus>;
}
