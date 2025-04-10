/** 工作台中心模板 */
export interface ModelWorkbenchHubTemplate {
  /** 实例Id */
  instanceId: string;

  /** 模板名称 */
  name: string;

  /** 是否是默认模板 */
  isDefault: boolean;

  /** layouts */
  layouts: Record<string, any>[];
}
