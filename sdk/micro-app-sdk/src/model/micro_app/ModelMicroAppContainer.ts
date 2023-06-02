/** 小产品桌面 */
export interface ModelMicroAppContainer {
  /** cmdb唯一标识, 业务逻辑请使用id作为唯一标识 */
  instanceId: string;

  /** 小产品桌面名称 */
  name: string;

  /** 小产品桌面id */
  id: string;

  /** 桌面类型 */
  type: "desktop" | "dir";

  /** 桌面显示顺序 */
  order: number;
}
