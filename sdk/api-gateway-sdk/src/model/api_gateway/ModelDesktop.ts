import { ModelDesktopItem } from ".";

/** app展示视图 */
export interface ModelDesktop {
  /** 桌面名称 */
  name: string;

  /** 排序 */
  order: number;

  /** 桌面元素列表 */
  items: ModelDesktop_items_item[];
}

export interface ModelDesktop_items_item {
  /** 元素类型 */
  type?: "app" | "dir";

  /** 小产品id或文件夹id */
  id?: string;

  /** dir名称（type为dir时有效） */
  name?: string;

  /** 元素位置 */
  position?: number;

  /** 小产品列表(type为dir时有效) */
  items?: Partial<ModelDesktopItem>[];
}
