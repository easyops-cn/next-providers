import { ModelAlertConditions } from ".";

/** 告警事件 Model */
export interface ModelAlertEvent {
  /** 记录 ID */
  id: string;

  /** 告警 ID */
  alert_id: string;

  /** 告警规则 ID */
  rule_id: string;

  /** 告警是否已恢复 */
  is_recover: boolean;

  /** 告警是否发送成功 */
  send_succ: boolean;

  /** 告警主题 */
  subject: string;

  /** 告警内容 */
  content: string;

  /** 告警来源（system：easyops平台） */
  source: string;

  /** 告警状态: 0-告警已发送，3-告警被屏蔽 */
  status: 0 | 3;

  /** 是否发送邮件成功（0：未发送/失败，1：成功） */
  send_detail: number;

  /** 告警恢复类型（auto：自动恢复，manual：手动恢复） */
  recover_type: "auto" | "manual";

  /** org */
  org: number;

  /** 告警对象 */
  target: string;

  /** 告警等级 */
  level: number;

  /** 告警值 */
  value: any;

  /** 告警持续时间 */
  alert_duration: number;

  /** 告警开始时间 */
  alert_begin_time: number;

  /** 告警结束时间 */
  alert_end_time: number;

  /** 告警时间 */
  time: number;

  /** 告警开始时间 */
  start_time: number;

  /** 插入 mongodb 时间戳 */
  insert_time: number;

  /** 告警接收人 */
  alert_receivers: ModelAlertEvent_alert_receivers_item[];

  /** 告警维度 */
  alert_dims: ModelAlertEvent_alert_dims_item[];

  /** 告警发生后的动作，可以是通知或者执行工具流程 */
  actions: ModelAlertEvent_actions_item[];

  /** 告警条件 */
  alert_conditions: Partial<ModelAlertConditions>;

  /** 模型id */
  objectId: string;

  /** 实例id */
  instanceId: string;

  /** 版本标示 */
  system: string;
}

export interface ModelAlertEvent_alert_receivers_item {
  /** 接收人名称 */
  name?: string;

  /** 通知方式, e.g.: email */
  method?: string;
}

export interface ModelAlertEvent_alert_dims_item {
  /** 告警维度前台展示名字 */
  name?: string;

  /** 告警维度值 */
  value?: any;
}

export interface ModelAlertEvent_actions_item {
  /** 动作触发条件 */
  condition?: ModelAlertEvent_actions_item_condition;

  /** 动作类型 */
  type?: "notification";

  /** 告警动作执行状态(0:未执行, 1:已执行) */
  status?: number;

  /** 告警动作是否升级 */
  upgrade?: boolean;

  /** 告警动作是否执行 */
  run?: boolean;

  /** 告警通知方法 */
  methods?: string[];

  /** 告警通知人列表 */
  receivers?: string[];

  /** 告警通知用户组列表 */
  receiver_user_groups?: string[];

  /** 告警通知运维负责人列表 */
  receiver_owners?: ModelAlertEvent_actions_item_receiver_owners_item[];
}

export interface ModelAlertEvent_actions_item_condition {
  /** 告警持续时间多久后升级，单位：分钟 */
  lasting_for?: number;

  /** 告警等级大于多少升级 */
  level?: 0 | 1 | 2;
}

export interface ModelAlertEvent_actions_item_receiver_owners_item {
  /** 描述 */
  translate?: string;

  /** 模型 ID */
  object_id?: string;

  /** 模型属性 ID */
  object_attr_id?: string;
}
