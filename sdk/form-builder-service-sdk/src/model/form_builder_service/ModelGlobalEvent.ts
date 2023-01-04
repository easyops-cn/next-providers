/** 公共事件 */
export interface ModelGlobalEvent {
  /** 事件标题 */
  title: string;

  /** 条件 */
  conditions: string;

  /** 动作 */
  actions: string;

  /** 动作类型 */
  actionType: string;

  /** 事件Id */
  eventId: string;

  /** 事件类型 */
  eventType: string;

  /** 来源 */
  origin: string;

  /** 目标 */
  target: string;
}
