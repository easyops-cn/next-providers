import { ModelExtIcon } from "../common";
import { ModelInstalledMicroApp } from "../micro_app";
import { ModelLaunchpadDesktopItem } from "../micro_app_standalone";

/** launchpad收藏V2 */
export interface ModelLaunchpadCollectionV2 {
  /** 实例ID */
  instanceId: string;

  /** microApp:微应用;customItem:自定义菜单项;link:自定义链接 */
  type: "microApp" | "customItem" | "link";

  /** 标题, type等于link时有值 */
  name: string;

  /** 图标, type等于link时有值 */
  icon: Partial<ModelExtIcon>;

  /** 链接, type等于link时有值 */
  link: string;

  /** 关联微应用, type等于microApp时有值 */
  relatedApp: ModelLaunchpadCollectionV2_relatedApp;

  /** 关联微应用, type等于microApp时有值 */
  relatedCustomItem: ModelLaunchpadCollectionV2_relatedCustomItem;
}

export interface ModelLaunchpadCollectionV2_relatedApp {
  /** cmdb唯一标识, 业务逻辑请使用appId作为唯一标识 */
  instanceId?: string;

  /** 小产品名称 */
  name?: string;

  /** 小产品id */
  appId?: string;

  /** 小产品首页 */
  homepage?: string;

  /** 菜单中显示的图标 */
  menuIcon?: ModelInstalledMicroApp["menuIcon"];

  /** locales */
  locales?: any;
}

export interface ModelLaunchpadCollectionV2_relatedCustomItem {
  /** 实例ID */
  instanceId?: string;

  /** dir/app/custom id */
  id?: string;

  /** dir/app/custom 名称 */
  name?: string;

  /** custom url */
  url?: string;

  /** 菜单中显示的图标 */
  menuIcon?: ModelLaunchpadDesktopItem["menuIcon"];
}
