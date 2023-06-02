import { ModelStepStatus } from ".";
import { ModelInput, ModelBuildStatus } from "../pipeline";

/** 工作流任务 */
export interface ModelBuildDetail {
  /** 任务id, 服务端自动生成 */
  id: string;

  /** 项目id, 服务端自动生成 */
  projectId: string;

  /** 工作流id, 服务端自动生成 */
  workflowId: string;

  /** 触发者，创建的时候传入，不能修改 */
  triggerer: string;

  /** 创建时间，创建的时候传入，不能修改 */
  created: number;

  /** workflow定义 */
  yamlString: string;

  /** 输入 */
  inputs: Partial<ModelInput>[];

  /** 构建参数 */
  buildVars: Partial<ModelInput>[];

  /** step 状态 */
  steps: Partial<ModelStepStatus>[];

  /** 执行状态 */
  status: Partial<ModelBuildStatus>;
}
