/** 工作流定义 */
export interface ModelWorkflowDef {
  /** 工作流的instanceId */
  instanceId: string;

  /** 工作流id */
  id: string;

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

  /** 工作流变量 */
  variables: ModelWorkflowDef_variables_item[];

  /** 工作流定义所属appId */
  appId: string;
}

export interface ModelWorkflowDef_schedulerConfig {
  /** startTime */
  startTime?: string;

  /** endTime */
  endTime?: string;

  /** 定时时间：1 8 1 * *（在上午 08:01, 限每月 1 号） */
  crontab?: string;
}

export interface ModelWorkflowDef_dataChangedConfig {
  /** 模型id(触发方式是数据变更时使用) */
  objectId?: string;

  /** 数据变更触发的触发条件 */
  triggerEvent?: "add" | "update" | "delete";
}

export interface ModelWorkflowDef_variables_item {
  /** 变量名称 */
  name?: string;

  /** type为enum时，使用英文逗号拼接多个枚举值 */
  value?: string;

  /** 参数类型 */
  type?: "int" | "string" | "enum";

  /** 枚举值列表 */
  enum_values?: string[];
}
