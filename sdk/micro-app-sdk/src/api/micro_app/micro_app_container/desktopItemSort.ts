import { http, HttpOptions } from "@next-core/brick-http";

export interface MicroAppContainerApi_DesktopItemSortRequestBody {
  /** 排序后的菜单项 */
  sortedTargets: MicroAppContainerApi_DesktopItemSortRequestBody_sortedTargets_item[];
}

/**
 * @description 菜单项排序
 * @endpoint PUT /api/micro_app/v1/micro_app_container/desktop_item_sort
 */
export const MicroAppContainerApi_desktopItemSort = (
  data: MicroAppContainerApi_DesktopItemSortRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.micro_app_container.DesktopItemSort@1.0.0 */ http.put<void>(
    "api/gateway/micro_app.micro_app_container.DesktopItemSort/api/micro_app/v1/micro_app_container/desktop_item_sort",
    data,
    options
  );

export interface MicroAppContainerApi_DesktopItemSortRequestBody_sortedTargets_item {
  /** 实例ID */
  instanceId?: string;

  /** 元素类型 */
  type?: "app" | "dir" | "custom";

  /** 排序 */
  order?: number;
}
