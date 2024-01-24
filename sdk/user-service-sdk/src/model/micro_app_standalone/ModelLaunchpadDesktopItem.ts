import { ModelInstalledMicroAppMenuIcon } from "../micro_app";

/** Launchpad桌面元素 */
export interface ModelLaunchpadDesktopItem {
  /** 实例ID */
  instanceId: string;

  /** 元素类型 */
  type: "app" | "dir" | "custom";

  /** dir/app/custom id */
  id: string;

  /** dir/app/custom 名称 */
  name: string;

  /** custom url */
  url: string;

  /** 菜单中显示的图标 */
  menuIcon: Partial<ModelInstalledMicroAppMenuIcon>;

  /** 元素位置 */
  position: number;

  /** 小产品列表(type为dir时有效) */
  items: Partial<ModelLaunchpadDesktopItem>[];

  /** locales(type为app时有效) */
  locales: Record<string, any>;
}
