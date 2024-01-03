import { ModelDataDefinition } from ".";

/** 工作流定义 */
export interface ModelWorkflowDef {
  /** 工作流的instanceId */
  instanceId: string;

  /** 工作流id */
  id: string;

  /** uuid */
  uuid: string;

  /** 工作流name */
  name: string;

  /** 工作流说明 */
  description: string;

  /** 工作流yaml配置 */
  workflowYaml: string;

  /** 触发方式 */
  triggerMethod: "manual" | "periodic" | "dataChanged";

  /** 定时执行触发方式配置 */
  schedulerConfig: ModelWorkflowDef_schedulerConfig;

  /** 数据变更触发方式配置 */
  dataChangedConfig: ModelWorkflowDef_dataChangedConfig;

  /** 字段定义列表 */
  variables: Partial<ModelDataDefinition>[];

  /** 工作流定义所属appId */
  appId: string;
}

export interface ModelWorkflowDef_schedulerConfig {
  /** 0 表示不禁用, 1 表示禁用 */
  disable?: 0 | 1;

  /** 定时时间：1 8 1 * *（在上午 08:01, 限每月 1 号） */
  crontab?: string;
}

export interface ModelWorkflowDef_dataChangedConfig {
  /** 模型id(触发方式是数据变更时使用) */
  objectId?: string;

  /** 数据变更触发的触发条件 */
  triggerEvent?: string;
}
