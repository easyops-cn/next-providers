/** 工作台自定义入口 */
export interface ModelWorkbenchCustomEntry {
  /** 实例Id */
  instanceId: string;

  /** 标题 */
  title: string;

  /** 类型: example: normal/small/iframe */
  type: string;

  /** 卡片内容 */
  list: Record<string, any>[];

  /** 当前入口是否是被管理员添加的 用途: 是否被管理员添加的标记，管理员添加的入口普通用户不可编辑 */
  isCreatedBySystemAdmin: boolean;

  /** 告警时间范围，from 可以是 now-1d，now-7d 这些格式化字符串，也可以是时间戳类型的值 */
  timeRange: ModelWorkbenchCustomEntry_timeRange;
}

export interface ModelWorkbenchCustomEntry_timeRange {
  /** 起始时间 */
  from?: string;

  /** 结束时间 */
  to?: string;
}
