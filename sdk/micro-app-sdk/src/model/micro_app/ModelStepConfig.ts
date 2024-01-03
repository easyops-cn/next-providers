/** 工作流步骤信息(运行时) */
export interface ModelStepConfig {
  /** 审批步骤使用: 审批人配置信息, 包含用户组和用户 */
  originApprovers: string[];

  /** 审批步骤使用: 如果有用户组，展开用户组所有成员 */
  approvers: string[];

  /** 审批步骤使用: 审批过的人 */
  approversDone: string[];

  /** 审批步骤使用: 未审批的人 */
  approversUndone: string[];

  /** 审批步骤使用: 会签/或签 */
  actType: "and" | "or";

  /** 审批步骤使用:审批意见 */
  comments: ModelStepConfig_comments;

  /** 审批步骤设置: 超时时间 */
  timeout: number;

  /** 审批步骤设置: 目前有：assign(转审)和reject(回退)两种设置 */
  operationType: string[];

  /** 审批步骤设置: 当operationType==return时配置，即：回退相关设置 */
  returnSetting: ModelStepConfig_returnSetting;

  /** 审批步骤设置: 当operationType==assign时配置，即：转审相关设置 */
  assignSetting: ModelStepConfig_assignSetting;

  /** 审批步骤设置: 在运行时指定审批人 */
  setApproversByRuntime: boolean;

  /** 审批步骤设置: 指定当前步骤审批人的步骤id */
  stepIdOfSettingApprovers: string;

  /** 审批步骤设置: 当选择回退时， 要回退到的步骤id */
  returnStepId: string;

  /** 审批步骤设置: 审批记录 */
  approvalRecord: ModelStepConfig_approvalRecord_item[];

  /** 审批步骤和抄送步骤使用: 通知内容 */
  sendContent: string;

  /** 抄送步骤使用: 通知人 */
  notifier: string[];

  /** 抄送步骤使用: 通知方式 */
  noticeMethod: string[];

  /** 条件步骤使用: 条件配置 */
  condition: string;

  /** 网关步骤使用: inclusive: 包容性网关 exclusive: 唯一性网关 */
  gatewayType: "inclusive" | "exclusive";

  /** cmdb相关步骤使用: 选择的步骤id */
  selectedStepId: string;

  /** cmdb相关步骤使用: 选择的模型 */
  selectedModel: string;

  /** cmdb_search步骤使用：当未获取到数据时，新增记录或者终止流程 */
  executeType: "addRecord" | "terminate";

  /** cmdb_search步骤使用 */
  query: string;

  /** cmdb_search步骤使用 */
  fields: string[];

  /** cmdb_search步骤使用 */
  sort: ModelStepConfig_sort_item[];

  /** cmdb_delete步骤使用: 是否归档 */
  archive: boolean;
}

export interface ModelStepConfig_comments {
  /** 通过时必填 */
  passRequired?: boolean;

  /** 否决时必填 */
  rejectRequired?: boolean;
}

export interface ModelStepConfig_returnSetting {
  /** 回退处理完成后， 0: 重新执行流程 1：直接返回审批节点 */
  returnType?: number;

  /** 允许退回的节点 0：上方所有节点 1：指定节点 2：仅上一个节点 3：仅发起节点 */
  returnStepType?: number;

  /** 当returnType为`上方所有节点，即0`时设置，表示：可以退回的每一个步骤id */
  returnSteps?: string[];

  /** 当returnStepType为`指定节点, 即1`时设置，值是：指定节点的id */
  specifiedSteps?: string[];
}

export interface ModelStepConfig_assignSetting {
  /** 转审候选人 */
  assigners?: string[];
}

export interface ModelStepConfig_approvalRecord_item {
  /** 审批人 */
  approver?: string;

  /** action */
  action?: string;

  /** comment */
  comment?: string;

  /** 回退操作消费->回退步骤id */
  returnStepId?: string;

  /** 转审操作消费->转审人 */
  assigner?: string;
}

export interface ModelStepConfig_sort_item {
  /** key */
  key?: string;

  /** order */
  order?: number;
}
