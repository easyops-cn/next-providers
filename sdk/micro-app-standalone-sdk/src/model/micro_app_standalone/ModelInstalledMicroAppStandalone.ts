/** 小产品 */
export interface ModelInstalledMicroAppStandalone {
  /** 小产品id */
  appId: string;

  /** NA程序包版本 */
  version: string;

  /** 小产品首页 */
  homepage: string;

  /** 状态 */
  status: "enabled" | "disabled" | "developing";

  /** 入口HTML */
  entryHtml: string;

  /** 是否激活版本 */
  isActiveVersion: boolean;

  /** 用户配置 */
  userConfig: Record<string, any>;
}
