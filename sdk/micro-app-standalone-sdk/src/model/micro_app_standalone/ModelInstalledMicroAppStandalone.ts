import {
  ModelInstalledMicroAppIcon,
  ModelInstalledMicroAppMenuIcon,
} from "../micro_app";

/** 小产品 */
export interface ModelInstalledMicroAppStandalone {
  /** 小产品id */
  appId: string;

  /** 小产品名称 */
  name: string;

  /** NA程序包版本 */
  version: string;

  /** 小产品图标图标url */
  icons: Partial<ModelInstalledMicroAppIcon>;

  /** 菜单中显示的图标 */
  menuIcon: Partial<ModelInstalledMicroAppMenuIcon>;

  /** 小产品首页 */
  homepage: string;

  /** 状态 */
  status: "enabled" | "disabled" | "developing";

  /** 表示该应用是内部的，不出现在 launchpad 和 app store 中 */
  internal: "true" | "false";

  /** 入口HTML */
  entryHtml: string;

  /** 是否激活版本 */
  isActiveVersion: boolean;

  /** 默认配置 */
  defaultConfig: Record<string, any>;
}
