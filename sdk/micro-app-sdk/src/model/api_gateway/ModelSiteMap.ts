/** 系统地图 */
export interface ModelSiteMap {
  /** 分类ID */
  id: string;

  /** 分类名称 */
  name: string;

  /** 分类顺序 */
  order: string;

  /** 微应用列表 */
  apps: ModelSiteMap_apps_item[];

  /** 微应用客户自定义排序 */
  customAppSort: ModelSiteMap_customAppSort_item[];
}

export interface ModelSiteMap_apps_item {
  /** 微应用id */
  id?: string;

  /** 微应用排序 */
  sort?: string;
}

export interface ModelSiteMap_customAppSort_item {
  /** 微应用id */
  id?: string;

  /** 微应用排序 */
  sort?: string;
}
