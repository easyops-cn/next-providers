import { ModelAlertDims, ModelAlertConditions } from ".";

/** 告警规则 */
export interface ModelAlertRule {
  /** org */
  org: number;

  /** 告警规则id */
  id: string;

  /** 告警规则名 */
  rule_name: string;

  /** 告警规则版本 */
  version: number;

  /** 版本id，废弃 */
  version_id: string;

  /** 告警维度 */
  alert_dims: Partial<ModelAlertDims>[];

  /** 规则优先级 */
  rule_priority: number;

  /** 告警条件 */
  alert_conditions: Partial<ModelAlertConditions>;

  /** detect_window个时间窗内， 如果有alert_count个点超出阈值范围，则告警 */
  detect_window: number;

  /** detect_window个时间窗内， 如果有alert_count个点超出阈值范围，则告警 */
  alert_count: number;

  /** 告警间隔 */
  alert_interval: number;

  /** 告警恢复间隔 */
  recover_count: number;

  /** 告警动作（通知或者执行工具流程） */
  actions: ModelAlertRule_actions_item[];

  /** 告警通知模板 */
  templates: ModelAlertRule_templates;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: number;

  /** 最近一次改变时间 */
  mtime: number;

  /** 关联的模型实例 */
  instances: ModelAlertRule_instances;

  /** 关联的模型ID */
  objectId: string;

  /** 是否禁用 */
  disabled: boolean;

  /** 来源 */
  source: string;
}

export interface ModelAlertRule_actions_item {
  /** 动作触发条件 */
  condition?: ModelAlertRule_actions_item_condition;

  /** 告警动作类型 */
  type?: "notification";

  /** 是否告警升级的动作, false的时候为默认发送动作, 给前台识别用 */
  upgrade?: boolean;

  /** 通知方式 */
  methods?: string[];

  /** 通知人 */
  receivers?: string[];

  /** 通知用户组 */
  receiver_user_groups?: string[];

  /** 通知负责人 */
  receiver_owners?: ModelAlertRule_actions_item_receiver_owners_item[];
}

export interface ModelAlertRule_templates {
  /** 内容模板 */
  content_template?: string;

  /** 告警对象模板 */
  target_template?: string;

  /** 恢复内容模板 */
  recovery_content_template?: string;
}

export interface ModelAlertRule_instances {
  /** 查询条件类型 */
  type?: "constant" | "search" | "all";

  /** instanceId列表 */
  instanceIds?: string[];

  /** 关联实例查询条件 */
  query?: Record<string, any>;
}

export interface ModelAlertRule_actions_item_condition {
  /** 告警持续时间多久后升级（单位：分钟） */
  lasting_for?: number;

  /** 告警等级大于多少升级 */
  level?: 0 | 1 | 2;
}

export interface ModelAlertRule_actions_item_receiver_owners_item {
  /** 模型Id */
  object_id?: string;

  /** 关系Id */
  object_attr_id?: string;

  /** 标签 */
  translate?: string;
}
