/** 表单项 */
export interface ModelFormItem {
  /** 实例id */
  instanceId: string;

  /** 序号 */
  id: string;

  /** 块 */
  brick: string;

  /** 属性 */
  properties: string;

  /** 挂载点 */
  mountPoint: string;

  /** 事件列表 */
  events: string[];

  /** 排序 */
  sort: number;

  /** 是否展示 */
  if: boolean;

  /** 是否为根节点 */
  isRoot: boolean;
}
