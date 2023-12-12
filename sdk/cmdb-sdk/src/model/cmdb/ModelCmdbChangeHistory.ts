/** 变更历史详情 */
export interface ModelCmdbChangeHistory {
  /** 系统名称 */
  system: string;

  /** topic */
  topic: string;

  /** 事件id */
  event_id: string;

  /** 父事件id */
  parent_event_id: string;

  /** 父事件 */
  parent_event: Partial<ModelCmdbChangeHistory>;

  /** 事件名称 */
  event: string;

  /** 操作人 */
  operator: string;

  /** 目标名称(工具名/流程名/对象名/实例名) */
  target_name: string;

  /** 目标名称 */
  target_id: string;

  /** 目标分类 */
  target_category: string;

  /** ext_info */
  ext_info: Record<string, any>;

  /** memo */
  memo: string;

  /** 修改时间 */
  mtime: number;

  /** 创建时间 */
  ctime: number;
}
