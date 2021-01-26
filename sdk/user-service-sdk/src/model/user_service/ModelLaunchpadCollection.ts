import { ModelExtIcon } from "../common";

/** launchpad收藏 */
export interface ModelLaunchpadCollection {
  /** 实例ID */
  instanceId: string;

  /** microApp:微应用;customItem:自定义项;link:自定义链接 */
  type: "microApp" | "customItem" | "link";

  /** 标题 */
  name: string;

  /** 图标 */
  icon: Partial<ModelExtIcon>;

  /** 链接 */
  link: string;
}
